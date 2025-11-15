"use client";
import React, { useState } from "react";
import { Container } from "./Onboarding-styles";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Chip,
  Button,
  Divider
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
const Introduction = () => {
  return (
    <>
      <Stack spacing={3}>
        {/* Main description */}
        <Typography variant="body1" color="text.secondary">
          This guide will help you install Qortal on your desktop and get you
          started with{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "primary.main" }}>
            6 QORT
          </Box>
          . After this, you’ll be able to publish apps and videos, join groups,
          and do much more — completely decentralized.
        </Typography>

        {/* Quick feature highlights */}
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
              <Typography variant="body2" color="text.secondary">
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
              <Typography variant="body2" color="text.secondary">
                Chat, join groups, and discover apps built on Qortal.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Introduction;
