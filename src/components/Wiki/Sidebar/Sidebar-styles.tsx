import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { redditSans } from "../../../app/fonts";
import Link from "next/link";

type SidebarProps = {
  isActive: boolean;
};

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "10px",
  height: "fit-content",
  padding: "15px 20px",
  backgroundColor: theme.palette.background.default,
  borderRight: `1px solid ${theme.palette.customBlue.main}`
}));

export const StyledLink = styled(Link)<SidebarProps>(({ theme, isActive }) => ({
  display: "block",
  padding: "10px",
  fontSize: "1rem",
  fontFamily: redditSans.style.fontFamily,
  textDecoration: "none",
  color: isActive ? theme.palette.customBlue.main : theme.palette.text.primary,
  fontWeight: isActive ? "bold" : "normal",
  backgroundColor: isActive ? "#e6f0ff" : "transparent",
  borderRadius: "5px",
  cursor: "auto",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#3988ff",
    cursor: "pointer"
  }
}));
