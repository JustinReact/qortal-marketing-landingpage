"use client";
import { useRef, useState } from "react";
import ImageUploader from "../../components/Common/ImageUploader/ImageUploader";
import {
  AddImageButton,
  AddImageIcon,
  BlogContainer as NewsContainer,
  ButtonRow,
  CloseIcon,
  CreateButton,
  CustomInputField,
  ImagePreview,
  ImagePreviewRow,
  ProductImagesRow
} from "../../components/Blog/BlogPostsClient-styles";
import {
  Box,
  FormControl,
  SelectChangeEvent,
  useMediaQuery,
  useTheme
} from "@mui/material";
import TipTapChatBar from "../../components/Blog/TipTap";
import { Editor } from "@tiptap/core";
import { AddPhotoSVG } from "../../components/Common/Icons/AddPhotoSVG";

interface NewsData {
  title: string;
  thumbnail: string;
  body: string | null;
}
const NewNews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [newsTitle, setNewsTitle] = useState<string>("");
  const [newsThumbnail, setNewsThumbnail] = useState<string>('');

  const editorRef = useRef<Editor | null>(null);
  
  const setEditorRef = (editorInstance: any) => {
    editorRef.current = editorInstance;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewsTitle(event.target.value as string);
  };

  
  const downloadJSON = () => {
    if (!newsTitle || !newsThumbnail || !editorRef.current) {
      console.error("Missing required fields");
      return;
    }
    const blogData: NewsData = {
      title: newsTitle,
      thumbnail: newsThumbnail,
      body: editorRef.current.getHTML(),
    };
    const jsonString = JSON.stringify(blogData, null, 2); // Convert object to JSON string with 2-space indentation
    const blob = new Blob([jsonString], { type: "application/json" }); // Create a blob from the JSON string
    const url = URL.createObjectURL(blob); // Generate a URL for the blob

    const a = document.createElement("a"); // Create a temporary anchor element
    a.href = url; // Set the URL as the href of the anchor
    a.download = `${newsTitle.slice(0, 15)}.json`; // Set the download attribute with the file name

    document.body.appendChild(a); // Append the anchor to the body
    a.click(); // Trigger a click to initiate the download

    document.body.removeChild(a); // Remove the anchor after downloading
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <NewsContainer>
      {newsThumbnail && (
        <ProductImagesRow>
            <ImagePreviewRow>
              <Box style={{ position: "relative" }}>
                <ImagePreview
                  src={newsThumbnail}
                  alt="blog-thumbnail"
                  width={100}
                  height={100}
                />
                <CloseIcon
                  color={theme.palette.text.primary}
                  onClickFunc={() => {
                    setNewsThumbnail('');
                  }}
                  height={"22"}
                  width={"22"}
                ></CloseIcon>
              </Box>
            </ImagePreviewRow>
        </ProductImagesRow>
      )}
      {!newsThumbnail && (
        <ImageUploader
          onPick={(img: string) => setNewsThumbnail(img)}
        >
          <AddImageButton>
            Add News Thumbnail
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
        label="News Post Title"
        variant="filled"
        value={newsTitle}
        onChange={handleInputChange}
        inputProps={{ maxLength: 180 }}
        required
      />
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
          Create News Post
        </CreateButton>
      </ButtonRow>
    </NewsContainer>
  );
};

export default NewNews;
