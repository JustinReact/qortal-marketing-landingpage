import { useLocation, useNavigate } from "react-router-dom";
import { FooterContainer, FooterLink } from "./Footer-styles";

export async function sendRequestToExtension(
  requestType: string,
  payload?: any,
  timeout: number = 20000
): Promise<any> {
  return new Promise((resolve, reject) => {
    const requestId = Math.random().toString(36).substring(2, 15); // Generate a unique ID for the request
    const detail = {
      type: requestType,
      payload,
      requestId,
      timeout: timeout / 1000,
    };

    // Store the timeout ID so it can be cleared later
    const timeoutId = setTimeout(() => {
      document.removeEventListener("qortalExtensionResponses", handleResponse);
      reject(new Error("Request timed out"));
    }, timeout); // Adjust timeout as necessary

    function handleResponse(event: any) {
      const { requestId: responseId, data } = event.detail;
      if (requestId === responseId) {
        // Match the response with the request
        document.removeEventListener(
          "qortalExtensionResponses",
          handleResponse
        );
        clearTimeout(timeoutId); // Clear the timeout upon successful response
        resolve(data);
      }
    }

    document.addEventListener("qortalExtensionResponses", handleResponse);
    document.dispatchEvent(
      new CustomEvent("qortalExtensionRequests", { detail })
    );
  });
}

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterLink
        onClick={() => {
          navigate(`/support`);
        }}
        className={location.pathname === "/support" ? "active" : ""}
      >
        Support
      </FooterLink>
      <FooterLink
        onClick={() => {
          navigate(`/privacy`);
        }}
        className={location.pathname === "/privacy" ? "active" : ""}
      >
        Privacy Policy
      </FooterLink>
      <FooterLink
        onClick={() => {
          sendRequestToExtension("OPEN_EXTENSION");
        }}
        className={location.pathname === "/privacy" ? "active" : ""}
      >
        Open Extension2
      </FooterLink>
    </FooterContainer>
  );
};
