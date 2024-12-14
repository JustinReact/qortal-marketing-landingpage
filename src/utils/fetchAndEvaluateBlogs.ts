import { groupApi } from "../constants/endpoint";
import { checkStructureBlog } from "./checkStructure";

export const fetchAndEvaluateBlogs = async (data: any) => {
  const getBlogData = async () => {
    const { name, identifier, content } = data;
    let obj: any = {
      ...content,
      isValid: false
    };
    if (!name || !identifier) return obj;
    // Fetch rawdata from QDN based on resource's location (need name, service type and identifier)
    try {
      const url = `${groupApi}/arbitrary/BLOG/${name}/${identifier}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const responseData = await response.json();
      if (checkStructureBlog(responseData)) {
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

  const res = await getBlogData();
  return res;
};
