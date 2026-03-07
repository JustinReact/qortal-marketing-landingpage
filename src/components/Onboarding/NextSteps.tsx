"use client";
import React, { useEffect } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PublicIcon from "@mui/icons-material/Public";

const EBOOK_API: string =
  process.env.NEXT_PUBLIC_EBOOK_API_HOST || "http://localhost:3010";

const logout = async () => {
  try {
    await fetch(`${EBOOK_API}/onboarding/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // If your server sets an HTTP-only cookie with the token, include credentials:
      credentials: "include"
    });
  } catch (error) {
    console.error(error);
  }
};

const NextSteps = () => {
  useEffect(() => {
    logout();
  }, []);
  return (
    <>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5" gutterBottom>
            You’re all set on Qortal 🎉
          </Typography>
          <Typography variant="body1" color="text.primary">
            You now have the tools to fully participate in the Qortal ecosystem.
            Stay curious, explore, and start building in a network that can’t be
            shut down.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <SecurityIcon fontSize="small" color="primary" />
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Own your data
              </Typography>
              <Typography variant="body2" color="text.primary">
                No central server, no permissions. You control your keys.
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <GroupsIcon fontSize="small" color="primary" />
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Join the community
              </Typography>
              <Typography variant="body2" color="text.primary">
                Chat, join groups, and discover apps built on Qortal.
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            What should you try next?
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <Diversity3Icon fontSize="small" color="primary" />
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Join a group and start talking
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Use Qortal’s built-in groups to meet other supporters, ask
                  questions, collaborate on ideas, and stay updated on community
                  events.
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <PlayCircleFilledIcon fontSize="small" color="primary" />
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Watch and publish on Q-Tube
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Q-Tube hosts videos via P2P. Browse, share, or upload your own
                  content.
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <PublicIcon fontSize="small" color="primary" />
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  Explore every Q-App
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Forums, storage, social, publishing tools, and more — all
                  running on the same decentralized chain so there’s never a
                  single point of failure.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Qortal is unstoppable
          </Typography>
          <Typography variant="body2" color="text.primary">
            Everything you build or share from here on is secured by a global
            mesh of community nodes. No corporation or government can censor or
            seize your identity, content, or coins. Welcome to the future of the
            internet.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default NextSteps;
