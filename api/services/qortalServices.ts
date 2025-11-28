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

export const fetchBalanceByAddress = async (
  address: string
): Promise<number> => {
  if (!address) {
    throw new Error("missing_address");
  }

  try {
    const validApi: string = await findUsableApi();

    try {
      const { data } = await axios.get<any>(
        `${validApi}/addresses/balance/${address}`
      );

      const balance = Number(data?.value);
      if (Number.isNaN(balance)) return 0;

      return balance;
    } catch (error: any) {
      // Any error here => treat as 0 QORT
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 404) {
          // Address not found => 0 QORT
          return 0;
        }
      }

      return 0;
    }
  } catch (error: any) {
    // This catch is only for findUsableApi()
    throw new Error("failed_to_fetch_qortal_balance");
  }
};
export const hasQortalName = async (address: string): Promise<boolean> => {
  const names = await fetchNamesByAddress(address);

  return names.length > 0;
};

export const isNewUser = async (address: string): Promise<boolean> => {
  const balance = await fetchBalanceByAddress(address);
  return balance < 6;
};
