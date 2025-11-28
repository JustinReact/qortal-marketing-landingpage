"use client";
import React, { useState } from "react";
import { Container } from "./Onboarding-styles";
import {
  Box,
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
const Introduction = () => {
  const [open, setOpen] = useState(false);

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

        <Box>
          <Button variant="text" onClick={() => setOpen(true)}>
            Terms & Privacy
          </Button>
        </Box>
      </Stack>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="terms-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="terms-title">Terms & Privacy</DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="div">
            <List dense disablePadding>
              <ListItem>
                <ListItemText primary="Qortal onboarding is a volunteer-driven community effort. No guarantees are made that QORT will be sent or that rewards will be available at any given time." />
              </ListItem>
              <ListItem>
                <ListItemText primary="You are solely responsible for how you use Qortal. We are not liable for the content you publish, the groups you join, or the transactions you initiate." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email addresses are collected only to verify unique participants and prevent farming of the reward. We will not sell or share your address outside of Qortal communications." />
              </ListItem>
              <ListItem>
                <ListItemText primary="The onboarding token is stored in a secure cookie solely to keep your session active while you complete the steps." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Any stored email or IP information is hashed with a one-way function, making it impossible to reverse engineer." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Qortal is a decentralized, unstoppable network powered by its users. By continuing you acknowledge that you are interacting directly with community infrastructure, not a centralized company." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Participation is optional and provided as-is without warranties. Nothing here is financial advice." />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Introduction;
