"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ButtonOnBoarding, ButtonTextOnBoarding } from "./Onboarding-styles";
import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";

const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

const SESSION_REVERIFY_HINT =
  'Go back to the "Redeem 2 QORT" step, re-enter your email, and verify again.';

const getAuthErrorMessage = (reason?: string): string | null => {
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

const getSendQortErrorMessage = (reason?: string): string => {
  switch (reason) {
    case "invalid_qort_range_step1":
      return "2 QORT already redeemed.";
    case "invalid_qort_range_step2":
      return "4 QORT has already been redeemed for this email.";
    case "step1_not_completed":
      return "Step 1 (2 QORT) is not recorded for this email. Go back to the Redeem 2 QORT step and complete verification again.";
    case "ip_limit_reached":
      return "QORT was already sent from this connection.";
    case "name_required_step2":
      return "Register a Qortal name for this address before redeeming the 4 QORT.";
    case "buy_name_history_exists":
      return "The 4 QORT reward is only for addresses that registered a name without buying one. This address has a name purchase on-chain.";
    case "buy_name_tx_lookup_failed":
      return "Could not verify name purchase status. Please try again in a few minutes.";
    case "qortal_lookup_failed":
      return "Could not verify your name on the network. Please try again in a few minutes.";
    case "name_check_failed":
      return "Could not verify your name. Please try again.";
    case "missing_qortal_address":
      return "Missing Qortal address. Please restart onboarding from the Redeem 2 QORT step.";
    case "missing_ip":
      return "Could not verify your connection. Please refresh the page and try again.";
    case "send_failed":
      return "The QORT transfer failed. Please wait a minute and try again.";
    case "missing_token":
    case "missing_onboarding_payload":
    case "expired":
    case "invalid":
      return getAuthErrorMessage(reason) ?? "Your session is no longer valid.";
    default:
      return "Unable to redeem QORT. Please try again or contact support if this continues.";
  }
};

interface PropsReceiveQort {
  qortStep: number;
}

const ReceiveQort2 = ({ qortStep }: PropsReceiveQort) => {
  const [hasName, setHasName] = useState(false);
  const [loadingName, setLoadingName] = useState(true);
  const [sessionError, setSessionError] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [message, setMessage] = useState("");
  const [hasSentQort, setHasSentQort] = useState(false);
  const autoSendAttempted = useRef(false);

  const handleSessionAuthFailure = useCallback((reason?: string) => {
    const authMessage = getAuthErrorMessage(reason);
    if (authMessage) {
      setSessionError(true);
      setMessage(`❌ ${authMessage}`);
    }
  }, []);

  const handleSendQort = useCallback(async () => {
    setLoadingSend(true);
    setMessage("");

    try {
      const res = await fetch(
        `${EBOOK_API}/onboarding/sendQort?qortStep=${qortStep}`,
        {
          headers: { "Content-Type": "application/json" },
          credentials: "include"
        }
      );
      const data = await res.json();

      if (res.ok) {
        setMessage(
          "✅ 4 QORT redeemed. It might take up to 2 minutes to receive the 4 QORT."
        );
        setHasSentQort(true);
        return;
      }

      if (res.status === 401) {
        handleSessionAuthFailure(data?.reason);
        return;
      }

      if (data?.reason === "invalid_qort_range_step2") {
        setHasSentQort(true);
      }

      setMessage(`❌ ${getSendQortErrorMessage(data?.reason)}`);
    } catch (err) {
      console.error(err);
      setMessage(
        "❌ Could not reach the server. Check your connection and try again."
      );
    } finally {
      setLoadingSend(false);
    }
  }, [qortStep, handleSessionAuthFailure]);

  const checkForQortalName = useCallback(async () => {
    setLoadingName(true);
    setMessage("");

    try {
      const res = await fetch(`${EBOOK_API}/onboarding/hasQortalName`, {
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const data = await res.json();

      if (res.status === 401) {
        handleSessionAuthFailure(data?.reason);
        setHasName(false);
        return;
      }

      if (!res.ok) {
        setMessage(
          `❌ ${
            data?.error === "qortal_lookup_failed"
              ? "Could not check your name on the network. Please try again in a few minutes."
              : "Could not check your name. Please try again."
          }`
        );
        setHasName(false);
        return;
      }

      setHasName(Boolean(data?.hasName));
      if (!data?.hasName) {
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      setMessage(
        "❌ Could not check your name. Check your connection and try again."
      );
      setHasName(false);
    } finally {
      setLoadingName(false);
    }
  }, [handleSessionAuthFailure]);

  useEffect(() => {
    checkForQortalName();
  }, [checkForQortalName]);

  useEffect(() => {
    if (
      hasName &&
      !hasSentQort &&
      !sessionError &&
      !loadingName &&
      !autoSendAttempted.current
    ) {
      autoSendAttempted.current = true;
      handleSendQort();
    }
  }, [hasName, hasSentQort, sessionError, loadingName, handleSendQort]);

  if (loadingName) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 3
        }}
      >
        <CircularProgress size={28} />
        <Typography variant="body2" color="text.secondary">
          Checking for your Qortal name…
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
      }}
    >
      {sessionError && (
        <Alert severity="warning" sx={{ width: "100%" }}>
          {message.replace(/^❌\s*/, "")}
        </Alert>
      )}

      {!sessionError && (
        <>
          <Stack direction="row" spacing={1} alignItems="center">
            {hasName ? (
              <CheckCircleIcon color="success" />
            ) : (
              <CancelIcon color="error" />
            )}
            <Typography>
              {hasName ? "Name found on network" : "No name detected yet"}
            </Typography>
          </Stack>

          {!hasName && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                textAlign: "center"
              }}
            >
              <Typography variant="body2" color="text.primary">
                To redeem the remaining 4 QORT, register a name in Qortal Hub
                first (free registration — not a marketplace purchase). Names can
                take a few minutes to appear on the network after registering.
              </Typography>
              <ButtonTextOnBoarding
                onClick={checkForQortalName}
                size="medium"
                disabled={loadingName}
              >
                <RefreshIcon />
                Recheck for name
              </ButtonTextOnBoarding>
            </Box>
          )}

          {hasName && !hasSentQort && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1
              }}
            >
              {loadingSend ? (
                <>
                  <CircularProgress size={24} />
                  <Typography variant="body2" color="text.secondary">
                    Sending 4 QORT…
                  </Typography>
                </>
              ) : (
                <ButtonOnBoarding
                  onClick={handleSendQort}
                  disabled={loadingSend}
                  variant="contained"
                >
                  Redeem 4 QORT
                </ButtonOnBoarding>
              )}
            </Box>
          )}
        </>
      )}

      {message && !sessionError && (
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: message.startsWith("✅") ? "success.main" : "error.main"
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default ReceiveQort2;
