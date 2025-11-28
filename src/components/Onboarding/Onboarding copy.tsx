"use client";
import React, { useState } from "react";
import { Container } from "./Onboarding-styles";

const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

const Onboarding = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingSend(true);
    setMessage("");

    try {
      const res = await fetch(`${EBOOK_API}/onboarding/sendCode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (res.ok) {
        setEmailSent(true);
        setMessage("✅ Verification code sent! Check your email.");
      } else {
        setMessage(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to send code. Please try again.");
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
        body: JSON.stringify({ email, code })
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Verified! You’re good to continue.");
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

  const handleTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingVerify(true);
    setMessage("");

    try {
      const res = await fetch(`${EBOOK_API}/onboarding/sendQort`, {
        headers: { "Content-Type": "application/json" },
        // If your server sets an HTTP-only cookie with the token, include credentials:
        credentials: "include"
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Verified! You’re good to continue.");
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

  return (
    <Container>
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
          disabled={loadingSend || emailSent} // lock email after send
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16
          }}
        />

        <button
          type="submit"
          disabled={loadingSend || !email || emailSent}
          style={{
            background: "#0069ff",
            color: "white",
            padding: "10px 12px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 500
          }}
        >
          {loadingSend ? "Sending..." : "Send Code"}
        </button>

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
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                letterSpacing: 2,
                textAlign: "center"
              }}
            />

            <button
              onClick={handleVerify}
              disabled={loadingVerify || code.length < 4} // allow 4–6 depending on your backend
              style={{
                background: "#00b894",
                color: "white",
                padding: "10px 12px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 500
              }}
            >
              {loadingVerify ? "Verifying..." : "Verify Code"}
            </button>
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

        <button
          onClick={handleTest}
          style={{
            background: "#00b894",
            color: "white",
            padding: "10px 12px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 500
          }}
        >
          test
        </button>
      </form>
    </Container>
  );
};

export default Onboarding;
