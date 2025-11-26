"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  ButtonOnBoarding,
  ButtonWarningOnBoarding,
  Container
} from "./Onboarding-styles";
import { Box, Button, Typography } from "@mui/material";
export const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

interface PropsReceiveQort {
  qortStep: number;
}

const ReceiveQort = ({ qortStep }: PropsReceiveQort) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [qortalAddress, setQortalAddress] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingSession, setLoadingSession] = useState(false);
  const [loadingSendQort, setLoadingSendQort] = useState(false);
  const [hasSentQort, setHasSentQort] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  const [message, setMessage] = useState("");
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingSend(true);
    setMessage("");

    try {
      const res = await fetch(`${EBOOK_API}/onboarding/sendCode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, qortalAddress })
      });
      const data = await res.json();

      if (res.ok) {
        setEmailSent(true);
        setMessage(
          "✅ Verification code sent! Check your email. If the code is not in your inbox, please check the spam."
        );
      } else {
        setMessage(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (err: any) {
      console.error(err);
      setMessage(`❌ ${err?.message || "Failed to send code."}`);
    } finally {
      setLoadingSend(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingVerify(true);
    setMessage("");

    try {
      const res = await fetch(`${EBOOK_API}/onboarding/verifyCode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // If your server sets an HTTP-only cookie with the token, include credentials:
        credentials: "include",
        body: JSON.stringify({ email, code, qortStep, qortalAddress })
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Verified! Click the Send 2 QORT button.");
        setHasSession(true);

        // TODO: route to next step or unlock UI
      } else {
        setMessage(`❌ ${data.error || "Invalid code."}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Verification failed. Please try again.");
    } finally {
      setLoadingVerify(false);
    }
  };

  const handleSendQort = async () => {
    setLoadingSendQort(true);
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
          "✅ 2 QORT sent. It might take up to 2 minutes to receive the 2 QORT."
        );
        setHasSentQort(true);
        // TODO: route to next step or unlock UI
      } else {
        const message =
          data?.reason === "invalid_qort_range_step1"
            ? "2 QORT already sent"
            : data?.reason === "invalid_qort_range_step1"
            ? "4 QORT already sent"
            : "Unable to send QORT";
        setMessage(`❌ ${message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Sending Qort failed. Please try again.");
    } finally {
      setLoadingSendQort(false);
    }
  };

  const checkForSession = useCallback(async () => {
    try {
      setLoadingSession(true);

      const res = await fetch(`${EBOOK_API}/onboarding/session`, {
        headers: { "Content-Type": "application/json" },
        // If your server sets an HTTP-only cookie with the token, include credentials:
        credentials: "include"
      });
      const data = await res.json();
      if (data?.email) {
        setEmail(data.email);
        setQortalAddress(data.qortalAddress);
        setHasSession(true);
      }
    } catch (error) {
    } finally {
      setLoadingSession(false);
    }
  }, []);

  useEffect(() => {
    checkForSession();
  }, []);

  const logout = async () => {
    try {
      const res = await fetch(`${EBOOK_API}/onboarding/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // If your server sets an HTTP-only cookie with the token, include credentials:
        credentials: "include"
      });
      if (res?.ok) {
        setHasSession(false);
        setEmail("");
        setQortalAddress("");
        setCode("");
        setEmailSent(false);
        setMessage("");
        setHasSentQort(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loadingSession) return null;

  return (
    <>
      <Box
        sx={{
          marginBottom: "10px"
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Get your first 2 QORT. An email is required to send a verification
          code in order to prevent abuse.
        </Typography>
      </Box>
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 320,
          margin: "0 auto",
          gap: 10
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <ButtonWarningOnBoarding
            onClick={logout}
            variant="contained"
            color="warning"
            size="small"
            disabled={!hasSession}
            sx={{
              marginBottom: "10px"
            }}
          >
            Start over - only if there's an issue
          </ButtonWarningOnBoarding>
        </Box>
        <label htmlFor="email" style={{ fontWeight: 500 }}>
          Enter your email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loadingSend || emailSent || hasSession} // lock email after send
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16
          }}
        />

        <label htmlFor="code" style={{ fontWeight: 500, marginTop: 8 }}>
          Enter your Qortal address
        </label>
        <input
          id="qortalAddress"
          type="text"
          placeholder="Qortal address"
          value={qortalAddress}
          disabled={hasSession}
          onChange={(e) => setQortalAddress(e.target.value)}
          required
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16
          }}
        />
        {!hasSession && (
          <ButtonOnBoarding
            type="submit"
            variant="contained"
            disabled={
              loadingSend || !email || emailSent || !qortalAddress || hasSession
            }
          >
            {loadingSend ? "Sending..." : "Send Code"}
          </ButtonOnBoarding>
        )}

        {/* Code input shows only after email sent */}
        {emailSent && (
          <>
            <label htmlFor="code" style={{ fontWeight: 500, marginTop: 8 }}>
              Enter the verification code
            </label>
            <input
              id="code"
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              placeholder="6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              disabled={hasSession}
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                letterSpacing: 2,
                textAlign: "center"
              }}
            />

            <ButtonOnBoarding
              variant="contained"
              onClick={handleVerify}
              disabled={loadingVerify || code.length < 4 || hasSession} // allow 4–6 depending on your backend
            >
              {loadingVerify ? "Verifying..." : "Verify Code"}
            </ButtonOnBoarding>
          </>
        )}

        <ButtonOnBoarding
          onClick={handleSendQort}
          disabled={loadingSendQort || !hasSession || hasSentQort} // allow 4–6 depending on your backend
          variant="contained"
          sx={{
            marginTop: "10px"
          }}
        >
          Send 2 QORT
        </ButtonOnBoarding>

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
      </form>
    </>
  );
};

export default ReceiveQort;
