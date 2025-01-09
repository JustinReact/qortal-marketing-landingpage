"use client";

import { useRef, useState } from "react";
import ImageUploader from "../../components/Common/ImageUploader/ImageUploader";
import {
  AddImageButton,
  AddImageIcon,
  BlogContainer,
  ButtonRow,
  CloseIcon,
  CreateButton,
  CustomInputField,
  FiltersCheckbox,
  FiltersChip,
  FiltersContainer,
  FilterSelect,
  FilterSelectMenuItems,
  FiltersOption,
  FiltersSubContainer,
  FiltersTitle,
  ImagePreview,
  ImagePreviewRow,
  ProductImagesRow
} from "../../components/Blog/BlogPostsClient-styles";
import {
  Box,
  FormControl,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import TipTapChatBar from "../../components/Blog/TipTap";
import { Editor } from "@tiptap/core";
import { AddPhotoSVG } from "../../components/Common/Icons/AddPhotoSVG";

interface BlogData {
  title: string;
  thumbnail: string;
  body: string | null;
  categories: string[];
}
const NewBlog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const blogCategoryOptions = [
    "Web Development",
    "Privacy",
    "Web3",
    "Blockchain",
    "Cryptocurrency",
    "QORT",
    "QDN",
    "Qortal Browser Extension",
    "Qortal Wallet"
  ];

  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogThumbnail, setBlogThumbnail] = useState<string>('');
  const [blogCategories, setBlogCategories] = useState<string[]>([]);

  const editorRef = useRef<Editor | null>(null);
  
  const setEditorRef = (editorInstance: any) => {
    editorRef.current = editorInstance;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogTitle(event.target.value as string);
  };

  // Filtering by categories
  const handleChipSelect = (value: string[]) => {
    setBlogCategories(value);
  };

  const handleChipRemove = (chip: string) => {
    setBlogCategories((prevChips) => prevChips.filter((c) => c !== chip));
  };

  const clearEditorContent = () => {
    if (editorRef.current) {
      editorRef.current.chain().focus().clearContent().run();
    }
  };
  
  const downloadJSON = () => {
    if (!blogTitle || !blogThumbnail || !editorRef.current || blogCategories.length === 0) {
      console.error("Missing required fields");
      return;
    }
    const blogData: BlogData = {
      title: blogTitle,
      thumbnail: blogThumbnail,
      body: editorRef.current.getHTML(),
      categories: blogCategories
    };
    const jsonString = JSON.stringify(blogData, null, 2); // Convert object to JSON string with 2-space indentation
    const blob = new Blob([jsonString], { type: "application/json" }); // Create a blob from the JSON string
    const url = URL.createObjectURL(blob); // Generate a URL for the blob

    const a = document.createElement("a"); // Create a temporary anchor element
    a.href = url; // Set the URL as the href of the anchor
    a.download = `${blogTitle.slice(0, 15)}.json`; // Set the download attribute with the file name

    document.body.appendChild(a); // Append the anchor to the body
    a.click(); // Trigger a click to initiate the download

    document.body.removeChild(a); // Remove the anchor after downloading
    URL.revokeObjectURL(url); // Clean up the URL object

    // Clear data after download here
    // setBlogTitle("");
    // setBlogThumbnail("");
    // setBlogCategories([]);
    // clearEditorContent();
  };

  return (
    <BlogContainer>
      <Typography>Notes: Thumbnail must be 656px x 300px. Ensure all images are centered. Ensure to manually making font italic that needs to be, make superscripts, etc. For the bibliography, it needs to be number, dot, and space. Each on an individual line, for it to work.</Typography>
      {blogThumbnail && (
        <ProductImagesRow>
            <ImagePreviewRow>
              <Box style={{ position: "relative" }}>
                <ImagePreview
                  src={blogThumbnail}
                  alt="blog-thumbnail"
                  width={100}
                  height={100}
                />
                <CloseIcon
                  color={theme.palette.text.primary}
                  onClickFunc={() => {
                    setBlogThumbnail('');
                  }}
                  height={"22"}
                  width={"22"}
                ></CloseIcon>
              </Box>
            </ImagePreviewRow>
        </ProductImagesRow>
      )}
      {!blogThumbnail && (
        <ImageUploader
          onPick={(img: string) => setBlogThumbnail(img)}
        >
          <AddImageButton>
            Add Blog Thumbnail
            <AddImageIcon
              height="25px" 
              width="auto"
              color={theme.palette.text.primary}
            />
          </AddImageButton>
        </ImageUploader>
      )}
      <CustomInputField
        name="title"
        label="Blog Title"
        variant="filled"
        value={blogTitle}
        onChange={handleInputChange}
        inputProps={{ maxLength: 180 }}
        required
      />
      <FiltersContainer>
        <FiltersTitle>Categories</FiltersTitle>
        <FiltersSubContainer>
          <FormControl sx={{ width: "100%" }}>
            <FilterSelect
              multiple
              id="categories-select"
              value={blogCategories}
              options={blogCategoryOptions}
              disableCloseOnSelect
              onChange={(e: any, value) => handleChipSelect(value as string[])}
              renderTags={(values: any) =>
                values.map((value: string) => {
                  return (
                    <FiltersChip
                      key={value}
                      label={value}
                      onDelete={() => {
                        handleChipRemove(value);
                      }}
                    />
                  );
                })
              }
              renderOption={(props, option: any) => (
                <FiltersOption {...props}>
                  <FiltersCheckbox
                    checked={blogCategories.some((chip) => chip === option)}
                  />
                  {option}
                </FiltersOption>
              )}
              renderInput={(params) => (
                <FilterSelectMenuItems
                  {...params}
                  label="Categories"
                  placeholder="Filter by category"
                />
              )}
            />
          </FormControl>
        </FiltersSubContainer>
      </FiltersContainer>
      <div
        style={{
          backgroundColor: "#232428",
          minHeight: isMobile ? "0px" : "150px",
          maxHeight: "auto",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
          padding: isMobile ? "10px" : "20px",
          position: "relative",
          bottom: "unset",
          top: "unset",
          zIndex: "unset",
          flexShrink: 0
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "auto",
            flexShrink: 0
          }}
        >
          <TipTapChatBar
            setEditorRef={setEditorRef}
            onEnter={false}
            disableEnter={true}
            overrideMobile={true}
            customEditorHeight="240px"
          />
        </div>
      </div>
      <ButtonRow>
        <CreateButton
          onClick={downloadJSON}
          variant="contained"
        >
          Create Blog
        </CreateButton>
      </ButtonRow>
    </BlogContainer>
  );
};

export default NewBlog;
