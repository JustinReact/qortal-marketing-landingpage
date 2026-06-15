import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { oxygen } from "../../app/fonts";

export const SearchContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});

export const SearchInput = styled("input")(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 14px",
  borderRadius: "4px",
  border: `1px solid ${theme.palette.mode === "dark" ? "#595656" : "#C0C0C0"}`,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
  "&::placeholder": {
    color: theme.palette.mode === "dark" ? "#9e9e9e" : "#757575"
  },
  "&:focus": {
    borderColor: theme.palette.customBlue?.main ?? "#0070f3"
  }
}));

export const SearchResultsList = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: 0,
  padding: 0,
  listStyleType: "none"
});

export const SearchResultItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  padding: "10px 14px",
  borderRadius: "4px",
  cursor: "pointer",
  userSelect: "none",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1a2332" : "#f3f3f3"
  }
}));

export const SearchResultTitle = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "22px",
  color: theme.palette.text.primary
}));

export const SearchResultMeta = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  color: theme.palette.mode === "dark" ? "#9e9e9e" : "#757575"
}));

export const SearchEmptyState = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "16px",
  lineHeight: "24px",
  color: theme.palette.mode === "dark" ? "#9e9e9e" : "#757575",
  padding: "4px 2px"
}));
