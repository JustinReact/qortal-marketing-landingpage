import { fetchAPI } from "./fetchAPI";

const EBOOK_API: string | undefined = process.env.NEXT_PUBLIC_EBOOK_API_HOST! || "http://localhost:3010/api";
// const EBOOK_API_KEY: string | undefined = process.env.REACT_APP_EBOOK_API_KEY;

export const downloadEbook = async (name: string, email: string) => {
  try {
    const url = `/subscribe`;
    const requestBody = {
      name,
      email
    };
    const response = await fetchAPI(
      EBOOK_API,
      url,
      "POST",
      requestBody,
      true,
      true
    );
    if (!response) {
      return false;
    }
    return response;
  } catch (error) {
    console.error("Error in downloadEbook: ", error);
    return false;
  }
};

export const submitBlurb = async (email: string, blurb: string) => {
  try {
    const url = "/submit-blurb";
    const requestBody = {
      email,
      blurb
    };
    const response = await fetchAPI(
      EBOOK_API,
      url,
      "PUT",
      requestBody,
      true,
      true
    );
    if (!response) {
      return false;
    }
    return response;
  } catch (error) {
    console.error("Error in submitBlurb: ", error);
    return false;
  }
};
