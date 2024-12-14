import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { oxygen } from "../../../app/fonts";

export const DropdownButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "16px",
  gap: "4px",
  padding: "5px 9px",
  backgroundColor: theme.palette.customBlue.main,
  color: "white",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.customBlue.main,
    filter: "brightness(0.85)"
  },
  [theme.breakpoints.only("xs")]: {
    marginTop: 0
  }
}));
