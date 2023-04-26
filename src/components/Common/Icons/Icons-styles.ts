import { styled } from "@mui/system";

export const StyledIcon = styled("svg")(({ theme }) => ({
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    filter: theme.palette.mode === "dark" ? "drop-shadow(0px 4px 6px rgba(255, 255, 255, 0.6))" : "drop-shadow(0px 4px 6px rgba(99, 88, 88, 0.1))"
  }
}));