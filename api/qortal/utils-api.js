const axios = require("axios");

const apiEndpoints = ["http://localhost:12391", "https://ext-node.qortal.link"];

const findUsableApi = async () => {
  for (const endpoint of apiEndpoints) {
    try {
      // Set timeout to 3000 milliseconds (3 seconds)
      const response = await axios.get(`${endpoint}/admin/status`, {
        timeout: 3000
      });
      const data = response.data;
      if (data.isSynchronizing === false && data.syncPercent === 100) {
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

module.exports = { findUsableApi };
