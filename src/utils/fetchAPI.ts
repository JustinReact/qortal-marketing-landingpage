type methodType = "GET" | "POST" | "PUT" | "DELETE";

export const fetchAPI = async (
  apiHost: string,
  url: string,
  method: methodType = "GET",
  body: object | string = {},
  logResponse: boolean = false,
  throwError: boolean = false
) => {
  const full_url = apiHost + url;

  try {
    const fetchOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      ...(method !== "GET" && body ? { body: JSON.stringify(body) } : {}) // Conditionally include body
    };

    const response = await fetch(full_url, fetchOptions);
    if (logResponse) console.log(`response from ${full_url}:`, response);

    if (!response.ok) {
      const errorData = await response.json();
      if (throwError) throw errorData;
      throw new Error(
        `Error: ${
          errorData.message || response.statusText
        }. ${method} request to ${full_url} failed.`
      );
    }

    const contentType = response.headers.get("content-type");

    return contentType?.includes("application/json")
      ? response.json()
      : response; // check if the response is json before parsing
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
