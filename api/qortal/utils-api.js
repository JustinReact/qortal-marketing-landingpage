const axios = require("axios");

const apiEndpoints = ["https://api.qortal.org"];
const apiEndpointsEditor = ["https://appnode.qortal.org"];

/**
 * Qortal /admin/status shape has changed over time. Some nodes omit syncPercent
 * or sit at 99% while briefly isSynchronizing. For read-only calls (balance, etc.)
 * treat the API as usable when it responds with a plausible height.
 */
function isApiUsable(data) {
  if (!data || typeof data.height !== "number" || data.height <= 0) {
    return false;
  }

  const syncPercent =
    typeof data.syncPercent === "number" ? data.syncPercent : 100;

  if (data.isSynchronizing === true) {
    return syncPercent >= 99;
  }

  return syncPercent >= 99;
}

const findUsableApi = async () => {
  for (const endpoint of apiEndpoints) {
    try {
      const response = await axios.get(`${endpoint}/admin/status`, {
        timeout: 3000
      });
      if (isApiUsable(response.data)) {
        return endpoint;
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.log(`Timeout reached for API ${endpoint}`);
      } else {
        console.error(`Error checking API ${endpoint}:`, error);
      }
    }
  }

  throw new Error("No usable API found");
};

const findUsableApiEditor = async () => {
  for (const endpoint of apiEndpointsEditor) {
    try {
      const response = await axios.get(`${endpoint}/admin/status`, {
        timeout: 3000
      });
      if (isApiUsable(response.data)) {
        return endpoint;
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.log(`Timeout reached for API ${endpoint}`);
      } else {
        console.error(`Error checking API ${endpoint}:`, error);
      }
    }
  }
  throw new Error("No usable API found");
};

module.exports = { findUsableApi, findUsableApiEditor };
