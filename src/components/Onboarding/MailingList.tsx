"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ButtonOnBoarding } from "./Onboarding-styles";

const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010/api";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(true);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch(`${EBOOK_API}/onboarding/session`, {
          credentials: "include"
        });

        if (!res.ok) {
          throw new Error("Unable to fetch your onboarding session.");
        }

        const data = await res.json();
        if (data?.email) {
          setEmail(data.email);
        } else {
          throw new Error("Missing email in your onboarding session.");
        }
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoadingEmail(false);
      }
    };

    fetchSession();
  }, []);

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || status === "loading" || !name) return;

    try {
      setStatus("loading");
      setMessage("");

      const res = await fetch(`${EBOOK_API}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email?.trim(), name })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage("Great! You’ll now get the latest Qortal updates.");
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setMessage(error?.message || "Something went wrong, please try again.");
    } finally {
      setStatus((prev) => (prev === "success" ? "success" : "idle"));
    }
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Stay in the loop
        </Typography>
        <Typography variant="body1" color="text.primary">
          Subscribe to the official Qortal mailing list and be the first to know
          about new releases, governance updates, Q-App launches, and
          community-led initiatives. No spam — just the most important news so
          you never fall behind.
        </Typography>
      </Box>

      <Stack component="form" onSubmit={handleSubscribe} spacing={2}>
        <TextField
          fullWidth
          type="email"
          label="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ButtonOnBoarding
          type="submit"
          variant="contained"
          color="primary"
          disabled={
            !email ||
            status === "loading" ||
            loadingEmail ||
            !name ||
            status === "success"
          }
          startIcon={<MailOutlineIcon />}
        >
          {status === "loading" ? "Subscribing..." : "Join the mailing list"}
        </ButtonOnBoarding>
      </Stack>

      {message && (
        <Typography
          variant="body2"
          color={status === "error" ? "error.main" : "success.main"}
        >
          {message}
        </Typography>
      )}
    </Stack>
  );
};

export default MailingList;
