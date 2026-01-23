"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  ButtonOnBoarding,
  ButtonTextOnBoarding,
  Container
} from "./Onboarding-styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";

const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

interface PropsReceiveQort {
  qortStep: number;
}

const ReceiveQort2 = ({ qortStep }: PropsReceiveQort) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [qortalAddress, setQortalAddress] = useState("");
  const [hasName, setHasName] = useState(false);
  const [loadingName, setLoadingName] = useState(true);
  const [missingToken, setMissingToken] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [message, setMessage] = useState("");
  const [hasSentQort, setHasSentQort] = useState(false);

  const handleSendQort = async () => {
    setLoadingSend(true);
    setMessage("");

    try {
      const res = await fetch(
        `${EBOOK_API}/onboarding/sendQort?qortStep=${qortStep}`,
        {
          headers: { "Content-Type": "application/json" },
          // If your server sets an HTTP-only cookie with the token, include credentials:
          credentials: "include"
        }
      );
      const data = await res.json();

      if (res.ok) {
        setMessage(
          "✅ 4 QORT redeemed. It might take up to 2 minutes to receive the 4 QORT."
        );
        setHasSentQort(true);
        // TODO: route to next step or unlock UI
      } else {
        let message = "Unable to redeem QORT";
        
        if (data?.reason === "invalid_qort_range_step1") {
          message = "2 QORT already redeemed";
        } else if (data?.reason === "invalid_qort_range_step2") {
          message = "4 QORT already redeemed";
        } else if (data?.reason === "step1_not_completed") {
          message = "Please complete step 1 (2 QORT) first before redeeming 4 QORT";
        } else if (data?.reason === "ip_limit_reached") {
          message = "QORT was already sent to you";
        }
        
        setMessage(`❌ ${message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Verification failed. Please try again.");
    } finally {
      setLoadingSend(false);
    }
  };

  const checkForQortalName = useCallback(async () => {
    try {
      setLoadingName(true);

      const res = await fetch(`${EBOOK_API}/onboarding/hasQortalName`, {
        headers: { "Content-Type": "application/json" },
        // If your server sets an HTTP-only cookie with the token, include credentials:
        credentials: "include"
      });
      const data = await res.json();
      if (data?.hasName) {
        setHasName(true);
      }
      if (data?.reason === "missing_token") {
        setMissingToken(true);
        setMessage(
          "❌ Missing token! Go back to step 5 to re-send verification code."
        );
      }
    } catch (error) {
    } finally {
      setLoadingName(false);
    }
  }, []);

  useEffect(() => {
    checkForQortalName();
  }, []);

  useEffect(() => {
    if (hasName) {
      handleSendQort();
    }
  }, [hasName]);

  if (loadingName) return null;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px"
      }}
    >
      {!missingToken && (
        <>
          <Stack direction="row" spacing={1} alignItems="center">
            {hasName ? (
              <CheckCircleIcon color="success" />
            ) : (
              <CancelIcon color="error" />
            )}
            <Box>
              <Typography>{hasName ? "Has a name" : "No name yet"}</Typography>
            </Box>
          </Stack>

          {!hasName && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Typography>
                To redeem the remaining 4 QORT please register a name. If you
                have already registered a name, please wait a few minutes and
                then click "Recheck for name".
              </Typography>
              <ButtonTextOnBoarding onClick={checkForQortalName} size="medium">
                <RefreshIcon />
                Recheck for name
              </ButtonTextOnBoarding>
            </Box>
          )}
          {/* <ButtonOnBoarding
            onClick={handleSendQort}
            disabled={loadingSend || !hasName || hasSentQort}
            variant="contained"
          >
            REDEEM 4 Qort
          </ButtonOnBoarding> */}
        </>
      )}

      {message && (
        <p
          style={{
            marginTop: 10,
            color: message.startsWith("✅") ? "green" : "red"
          }}
        >
          {message}
        </p>
      )}
    </Box>
  );
};

export default ReceiveQort2;
