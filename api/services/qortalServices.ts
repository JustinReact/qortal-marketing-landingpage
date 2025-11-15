import axios from "axios";

const { findUsableApi } = require("../qortal/utils-api");

interface QortalNameRecord {
  name: string;
  owner: string;
  [key: string]: any;
}

/**
 * Fetch every Qortal name owned by an address.
 * Treat 404 responses as "no names" since the API returns 404 when the list is empty.
 */
export const fetchNamesByAddress = async (
  address: string
): Promise<QortalNameRecord[]> => {
  if (!address) {
    throw new Error("missing_address");
  }

  try {
    const validApi: string = await findUsableApi();
    const { data } = await axios.get<QortalNameRecord[]>(
      `${validApi}/names/address/${address}`
    );

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        return [];
      }
    }

    console.error(
      `[Qortal] Failed to fetch names for address ${address}:`,
      error?.message ?? error
    );
    throw new Error("failed_to_fetch_qortal_names");
  }
};

export const hasQortalName = async (address: string): Promise<boolean> => {
  const names = await fetchNamesByAddress(address);
  return names.length > 0;
};
