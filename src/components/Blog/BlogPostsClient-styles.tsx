import { Box, styled } from "@mui/system";
import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  TextField,
  Theme,
  Typography
} from "@mui/material";
import { cairo, fredokaOne, inter, montserrat, oxygen, ptSans, raleway, spartan } from "../../app/fonts";
import Image from "next/image";
import { CloseSVG } from "../Common/Icons/CloseSVG";
import { AddPhotoSVG } from "../Common/Icons/AddPhotoSVG";
import Link from "next/link";

export const BlogContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "25px 10px",
  width: "100%"
});

export const ProductImagesRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px"
});

export const ImagePreviewRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px"
});

export const ImagePreview = styled(Image)({
  width: "100px",
  height: "100px",
  objectFit: "contain",
  userSelect: "none",
  borderRadius: "3px",
  marginBottom: "10px"
});

export const CloseIcon = styled(CloseSVG)({
  position: "absolute",
  top: "0",
  right: "8px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)"
  }
});

const customInputStyle = (theme: Theme) => {
  return {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "18px",
    fontWeight: 300,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.background.paper,
    "& label": {
      color: theme.palette.mode === "light" ? "#808183" : "#edeef0",
      fontFamily: oxygen.style.fontFamily,
      fontSize: "18px",
      letterSpacing: "0px"
    },
    "& label.Mui-focused": {
      color: theme.palette.mode === "light" ? "#A0AAB4" : "#d7d8da"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.mode === "light" ? "#B2BAC2" : "#c9cccf"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7"
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C"
      }
    },
    "& .MuiInputBase-root": {
      fontFamily: oxygen.style.fontFamily,
      fontSize: "18px",
      letterSpacing: "0px"
    },
    "& .MuiFilledInput-root:after": {
      borderBottomColor: theme.palette.secondary.main
    }
  };
};

export const CustomInputField = styled(TextField)(({ theme }) =>
  customInputStyle(theme as Theme)
);

export const AddImageButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "17px",
  padding: "5px 10px",
  borderRadius: "5px",
  gap: "5px",
  border: "none",
  transition: "all 0.3s ease-in-out",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  marginBottom: "5px",
  "&:hover": {
    cursor: "pointer",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
        : "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
    backgroundColor: theme.palette.secondary.dark
  }
}));

export const AddImageIcon = styled(AddPhotoSVG)({
  color: "#fff",
  height: "25px",
  width: "auto"
});

export const ButtonRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

export const CreateButton = styled(Button)({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "15px",
  backgroundColor: "#32d43a",
  color: "black",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#2bb131"
  }
});

export const FiltersContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: "#ffffff",
  borderRadius: "10px",
  padding: "0 15px 10px 15px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
}));

export const FiltersSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "5px"
}));

export const FiltersTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  margin: "20px 0",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "17px",
  color: "#ffffff",
  userSelect: "none"
}));

export const FiltersCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#c0d4ff",
  "&.Mui-checked": {
    color: "#6596ff"
  }
}));

export const FiltersOption = styled("li")(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "17px",
  color: theme.palette.text.primary,
  userSelect: "none",
  paddingTop: "2px !important",
  paddingBottom: "2px !important"
}));

export const FiltersChip = styled(Chip)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  fontSize: "13px",
  color: theme.palette.text.primary,
  userSelect: "none"
}));

export const FilterSelect = styled(Autocomplete)(({ theme }) => ({
  "& #categories-select": {
    padding: "7px"
  },
  "& [class*='MuiInputBase-root-MuiOutlinedInput-root']": {
    gap: "5px"
  },
  '& [class*="MuiFormLabel-root-MuiInputLabel-root"]': {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "17px",
    color: "#ffffff",
    userSelect: "none",
    height: "25px"
  }
}));

export const FilterSelectMenuItems = styled(TextField)(({ theme }) => ({
  '& [class*="MuiInputBase-input"]': {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "17px",
    color: "#ffffff",
    userSelect: "none"
  }
}));

export const MainBlogWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "25px 10px",
  width: "100%"
});

export const BlogPageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: spartan.style.fontFamily,
  fontWeight: "bold",
  fontSize: "40px",
  color: theme.palette.text.primary,
  userSelect: "none",
  textAlign: "center"
}));

export const BlogPostsContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "15px",
  padding: "25px 10px",
  width: "100%"
});

export const BlogPostCard = styled(Box)(({ theme }) => ({
  height: "600px",
  backgroundColor: theme.palette.primary.light,
  borderRadius: "8px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  transition: "all 0.3s ease-in-out",
  ":hover": {
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 4px 5px 0px hsla(0,0%,0%,0.25), 0px 1px 10px 0px hsla(0,0%,0%,0.20), 0px 2px 4px -1px hsla(0,0%,0%,0.35)"
        : "rgba(99, 99, 99, 0.4) 0px 4px 12px 0px"
  }
}));

export const BlogPostImage = styled(Image)({
  width: "100%",
  height: "150px",
  objectFit: "contain",
  userSelect: "none"
});

export const BlogPostTitle = styled(Typography)(({ theme }) => ({
  fontFamily: inter.style.fontFamily,
  fontWeight: "bold",
  fontSize: "30px",
  lineHeight: "1.2",
  color: theme.palette.text.primary,
  marginTop: "10px",
  userSelect: "none"
}));

export const BlogPostBody = styled(Box)(({ theme }) => ({
  fontFamily: ptSans.style.fontFamily,
  fontSize: "18px",
  color: theme.palette.text.primary,
  userSelect: "none",
  maxHeight: "400px", /* This will limit the height of the content */
  overflow: "hidden",  /* Hide the overflowing content */
  display: "-webkit-box", /* Required for applying ellipsis on multiline content */
  WebkitBoxOrient: "vertical", /* Set the box orientation */
  WebkitLineClamp: "9", /* Adjust this value to the number of lines you want to display */
  textOverflow: "ellipsis" /* Add ellipsis for overflowed content */,
}));

export const ReadMoreButton = styled(Link)(({ theme }) => ({
  display: "inline-block",
  width: "fit-content",
  position: "relative",
  fontFamily: cairo.style.fontFamily,
  fontSize: "20px",
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
  "&::before": {
    content: "''",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "2px",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease"
  },
  "&:hover": {
    cursor: "pointer",
    "&::before": {
      transform: "scaleX(1)"
    }
  }
}));

export const BlogDateAndCategoryCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "8px",
});

export const Divider = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "1px",
  backgroundColor: theme.palette.secondary.main,
}));

export const BlogPostDate = styled(Typography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontSize: "17px",
  color: theme.palette.mode === "light" ? theme.palette.secondary.main : theme.palette.primary.light,
  userSelect: "none"
}));

export const BlogCategoriesRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  flexWrap: "wrap"
});

export const BlogPostCategory = styled(Typography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontSize: "14px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.dark,
  padding: "2px 15px",
  borderRadius: "15px",
  userSelect: "none"
}));
