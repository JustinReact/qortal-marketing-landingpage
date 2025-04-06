import { groupApi } from "../constants/endpoint";
import { checkStructureNews } from "./checkStructure";

export const fetchAndEvaluateNews = async (data: any) => {
  const getNewsData = async () => {
    const { name, identifier, content } = data;
    let obj: any = {
      ...content,
      isValid: false
    };
    if (!name || !identifier) return obj;
    // Fetch rawdata from QDN based on resource's location (need name, service type and identifier)
    try {
      const url = `${groupApi}/arbitrary/DOCUMENT/${name}/${identifier}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const responseData = await response.json();
      if (checkStructureNews(responseData)) {
        obj = {
          ...content,
          ...responseData,
          name,
          id: identifier,
          isValid: true
        };
      }
      return obj;
    } catch (error) {
      console.error(error);
    }
  };

  const res = await getNewsData();
  return res;
};
