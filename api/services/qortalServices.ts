import axios from "axios";
import { randomUUID } from "crypto";
import { statSync } from "fs";

const { findUsableApi, findUsableApiEditor } = require("../qortal/utils-api");
const { nacl } = require("../qortal/deps/nacl-fast");
const utils = require("../qortal/transactions/utils");

const {
  processTransactionVersion2,
  createKeyPair
} = require("../qortal/transactions/transactions");

const { Base58 } = require("../qortal/deps/Base58");

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

/**
 * True if this address has ever **purchased** a name on-chain (confirmed BUY_NAME).
 * Step 2 QORT is for users who **registered** a name without buying one: they must
 * have a name (`hasQortalName`) and no BUY_NAME history (empty search = eligible).
 */
export const hasConfirmedBuyNameTransaction = async (
  address: string
): Promise<boolean> => {
  if (!address) {
    throw new Error("missing_address");
  }

  try {
    const validApi: string = await findUsableApi();
    const { data } = await axios.get<unknown[]>(
      `${validApi}/transactions/search`,
      {
        params: {
          txType: "BUY_NAME",
          address,
          confirmationStatus: "CONFIRMED",
          limit: 1
        }
      }
    );

    if (!Array.isArray(data)) {
      return false;
    }

    return data.length > 0;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        return false;
      }
    }

    console.error(
      `[Qortal] Failed to search BUY_NAME transactions for ${address}:`,
      error?.message ?? error
    );
    throw new Error("failed_to_fetch_buy_name_transactions");
  }
};

export const isNewUser = async (address: string): Promise<boolean> => {
  const balance = await fetchBalanceByAddress(address);
  return balance < 6;
};

const createEndpoint = (baseUrl: string, urlSuffix: string) => {
  return `${baseUrl}${urlSuffix}`;
};

async function reusablePostStream(
  validApi: string,
  endpoint: string,
  formData: FormData
) {
  const url = createEndpoint(validApi, endpoint);

  // Use axios for multipart form-data - it handles binary data correctly
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity
    });

    // Return fetch-like response for compatibility
    return {
      ok: response.status >= 200 && response.status < 300,
      status: response.status,
      text: async () =>
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data),
      json: async () => response.data
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      const errorText =
        typeof errorData === "string" ? errorData : JSON.stringify(errorData);

      return {
        ok: false,
        status: error.response?.status || 500,
        text: async () => errorText,
        json: async () => errorData || { error: error.message }
      };
    }
    throw error;
  }
}

async function uploadChunkWithRetry(
  validApi: string,
  endpoint: string,
  formData: FormData,
  index: number,
  maxRetries = 3
) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const response = await reusablePostStream(validApi, endpoint, formData);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      return; // Success
    } catch (err) {
      attempt++;
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.warn(
        `Chunk ${index} failed (attempt ${attempt}): ${errorMessage}`
      );
      if (attempt >= maxRetries) {
        throw new Error(`Chunk ${index} failed after ${maxRetries} attempts`);
      }
      // Wait 25 seconds before next retry
      await new Promise((res) => setTimeout(res, 25_000));
    }
  }
}

async function reusablePost(validApi: string, endpoint: string, _body: any) {
  // const validApi = await findUsableApi();
  const url = createEndpoint(validApi, endpoint);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _body
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
  let data;
  try {
    data = await response.clone().json();
  } catch (e) {
    data = await response.text();
  }
  return data;
}

async function resuablePostRetry(
  validApi: string,
  endpoint: string,
  body: any,
  maxRetries = 3
) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const response = await reusablePost(validApi, endpoint, body);

      return response;
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error(
          err instanceof Error
            ? err?.message || `Failed to make request`
            : `Failed to make request`
        );
      }

      // Wait 10 seconds before next retry
      await new Promise((res) => setTimeout(res, 25_000));
    }
  }
}

async function reusableGet(validApi: string, endpoint: string) {
  const url = createEndpoint(validApi, endpoint);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const uploadData = async (
  filePath: string,
  validApi: string,
  identifier: string
) => {
  // For Node.js: data is a file path, not a File/Blob object
  const fileStats = statSync(filePath);
  const fileSize = fileStats.size;

  const fee = await getArbitraryFee(validApi);
  const baseUrl = `/arbitrary/FILES/onboarding/${identifier}`;

  const urlCheck = `/arbitrary/check/tmp?totalSize=${fileSize}`;

  const checkEndpoint = createEndpoint(validApi, urlCheck);
  console.log("Check endpoint:", checkEndpoint);
  const checkRes = await fetch(checkEndpoint);
  if (!checkRes.ok) {
    throw new Error("Not enough space on your hard drive");
  }

  const chunkUrl = `${baseUrl}/chunk?fee=${fee.fee}&isZip=true`;
  const chunkSize = 5 * 1024 * 1024; // 5MB

  const totalChunks = Math.ceil(fileSize / chunkSize);

  for (let index = 0; index < totalChunks; index++) {
    const start = index * chunkSize;
    const end = Math.min(start + chunkSize, fileSize);

    // For Node.js: Read the chunk as a Buffer
    const chunkBuffer = Buffer.alloc(end - start);
    const fd = require("fs").openSync(filePath, "r");
    require("fs").readSync(fd, chunkBuffer, 0, end - start, start);
    require("fs").closeSync(fd);

    // Create native Blob from buffer (Node.js 18+ feature)
    const blob = new Blob([chunkBuffer], { type: "application/octet-stream" });

    // Use native FormData
    const formData = new FormData();
    const filename = filePath.split("/").pop() || "file.zip";

    // Append as Blob with filename (axios will handle it correctly)
    formData.append("chunk", blob, filename);
    formData.append("index", String(index));

    await uploadChunkWithRetry(validApi, chunkUrl, formData, index);
  }

  const finalizeUrl = `${baseUrl}/finalize?fee=${fee.fee}&isZip=true`;

  const finalizeEndpoint = createEndpoint(validApi, finalizeUrl);

  const response = await fetch(finalizeEndpoint, {
    method: "POST",
    headers: {}
  });

  if (!response?.ok) {
    const errorText = await response.text();
    throw new Error(`Finalize failed (${response.status}): ${errorText}`);
  }

  const result = await response.text();

  // Trim whitespace and newlines from the response
  const trimmedResult = result.trim();

  // Log the response for debugging

  // Check if result looks like Base58 (should only contain Base58 characters)
  if (!trimmedResult || trimmedResult.length === 0) {
    throw new Error("Finalize returned empty response");
  }

  // Base58 alphabet: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
  const base58Regex =
    /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
  if (!base58Regex.test(trimmedResult)) {
    throw new Error(
      `Finalize returned non-Base58 data: ${trimmedResult.substring(0, 100)}`
    );
  }

  return trimmedResult;
};

const convertBytesForSigning = async (
  validApi: string,
  transactionBytesBase58: string
) => {
  return await resuablePostRetry(
    validApi,
    "/transactions/convert",
    transactionBytesBase58,
    3
  );
};

const getArbitraryFee = async (validApi: string) => {
  const timestamp = Date.now();

  let fee = await reusableGet(
    validApi,
    `/transactions/unitfee?txType=ARBITRARY&timestamp=${timestamp}`
  );

  return {
    timestamp,
    fee: Number(fee),
    feeToShow: (Number(fee) / 1e8).toFixed(8)
  };
};

const signArbitraryWithFee = (
  arbitraryBytesBase58: string,
  arbitraryBytesForSigningBase58: string,
  keyPair: any
) => {
  if (!arbitraryBytesBase58) {
    throw new Error("ArbitraryBytesBase58 not defined"); // TODO translate
  }

  if (!keyPair) {
    throw new Error("keyPair not defined");
  }

  const arbitraryBytes = Base58.decode(arbitraryBytesBase58);
  const _arbitraryBytesBuffer = Object.keys(arbitraryBytes).map(function (key) {
    return arbitraryBytes[key];
  });
  const arbitraryBytesBuffer = new Uint8Array(_arbitraryBytesBuffer);
  const arbitraryBytesForSigning = Base58.decode(
    arbitraryBytesForSigningBase58
  );
  const _arbitraryBytesForSigningBuffer = Object.keys(
    arbitraryBytesForSigning
  ).map(function (key) {
    return arbitraryBytesForSigning[key];
  });
  const arbitraryBytesForSigningBuffer = new Uint8Array(
    _arbitraryBytesForSigningBuffer
  );
  const signature = nacl.sign.detached(
    arbitraryBytesForSigningBuffer,
    keyPair.privateKey
  );

  return utils.appendBuffer(arbitraryBytesBuffer, signature);
};

const signAndProcessWithFee = async (
  validApi: string,
  transactionBytesBase58: string
) => {
  console.log("Valid API:", validApi);

  let convertedBytesBase58 = await convertBytesForSigning(
    validApi,
    transactionBytesBase58
  );

  if (convertedBytesBase58.error) {
    throw new Error("Error when signing");
  }

  const resKeyPair = createKeyPair();

  const keyPair = {
    privateKey: resKeyPair.privateKey,
    publicKey: resKeyPair.publicKey
  };

  let signedArbitraryBytes = signArbitraryWithFee(
    transactionBytesBase58,
    convertedBytesBase58,
    keyPair
  );
  const response = await processTransactionVersion2(
    Base58.encode(signedArbitraryBytes),
    validApi
  );

  let myResponse = { error: "" };

  if (response === false) {
    throw new Error("Error when signing");
  } else {
    myResponse = response;
  }

  return myResponse;
};

export const publishApp = async (
  zipLocation: string,
  existingIdentifier?: string
): Promise<any> => {
  const validApi: string = await findUsableApiEditor();
  // Use existing identifier if provided, otherwise generate new one
  const identifier = existingIdentifier || "demo" + "-" + randomUUID();

  console.log(`Publishing app with identifier: ${identifier}`);
  if (existingIdentifier) {
    console.log(`This is an update to an existing app`);
  } else {
    console.log(`This is a new app publication`);
  }

  const transactionBytes = await uploadData(zipLocation, validApi, identifier);

  const signAndProcessRes: any = await signAndProcessWithFee(
    validApi,
    transactionBytes
  );
  if (signAndProcessRes?.signature) {
    return {
      ...signAndProcessRes,
      identifier: identifier,
      appUrl: `${validApi}/arbitrary/FILES/onboarding/${identifier}`
    };
  } else {
    throw new Error("Error publishing app");
  }
};
