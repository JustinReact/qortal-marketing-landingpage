export const SESSION_REVERIFY_HINT =
  'Go back to the "Redeem 2 QORT" step, re-enter your email, and verify again.';

export const getAuthErrorMessage = (reason?: string): string | null => {
  switch (reason) {
    case "missing_token":
    case "missing_onboarding_payload":
      return `Your onboarding session is missing. ${SESSION_REVERIFY_HINT}`;
    case "expired":
      return `Your onboarding session has expired. ${SESSION_REVERIFY_HINT}`;
    case "invalid":
      return `Your onboarding session is invalid. ${SESSION_REVERIFY_HINT}`;
    default:
      return null;
  }
};

export const getSendQortErrorMessage = (reason?: string): string => {
  switch (reason) {
    case "invalid_qort_range_step1":
      return "2 QORT has already been sent to that email.";
    case "invalid_qort_step":
      return "This QORT reward is no longer available.";
    case "ip_limit_reached":
      return "QORT was already sent from this connection.";
    case "missing_qortal_address":
      return "Missing Qortal address. Please restart onboarding from the Redeem 2 QORT step.";
    case "missing_ip":
      return "Could not verify your connection. Please refresh the page and try again.";
    case "send_failed":
      return "The QORT transfer failed. Please wait a minute, then refresh the page to try again.";
    case "missing_token":
    case "missing_onboarding_payload":
    case "expired":
    case "invalid":
      return getAuthErrorMessage(reason) ?? "Your session is no longer valid.";
    default:
      return "Unable to redeem QORT. Refresh the page to try again, or contact support if this continues.";
  }
};
