"use client";
import {
  ArrowImg,
  Container,
  Header,
  CTARow,
  SubHeader,
  Features,
  FeatureContainer,
  IconContainer1,
  IconContainer2,
  IconContainer3,
  FeatureText,
  VideoBox,
  LockIcon,
  CTAButton,
  YoutubeVideoContainer,
  CTAText,
  BookImage,
  CTABox,
  CTABoxButton,
  CTABoxTextFieldContainer
} from "../Creators/Creators-styles";
import ReactGA from "react-ga4";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { ConnectSVG } from "../Common/Icons/ConnectSVG";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { useState } from "react";
import { PlayCircleSVG } from "../Common/Icons/PlayCircleSVG";
import { QortalSVG } from "../Common/Icons/QortalSVG";
import {
  CTABoxTitle,
  EbookTooltip,
  InfoIcon,
  InfoIconContainer
} from "../Ebook/Ebook-styles";
import { CustomInputField } from "../Blog/BlogPostsClient-styles";
import { useDispatch } from "react-redux";
import { setNotification } from "../../state/features/notificationsSlice";
import { downloadEbook } from "../../utils/ebookApiController";

const Creators = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value as string);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
    if (emailTouched) {
      setEmailError(!validateEmail(event.target.value));
    }
  };

  const handleDownloadEbook = async () => {
    try {
      const res = await downloadEbook(name, email);
      if (res) {
        dispatch(
          setNotification({
            msg: "Success! The Ebook Was Sent To Your Email!",
            alertType: "success"
          })
        );
        setName("");
        setEmail("");
      } else {
        dispatch(
          setNotification({
            msg: "Error in downloading the Ebook! Please, try again!",
            alertType: "error"
          })
        );
      }
    } catch (error: any) {
      dispatch(
        setNotification({
          msg: error,
          alertType: "error"
        })
      );
    }
  };

  // Function to handle the download button click
  const handleDownloadClick = async () => {
    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);
    const isNameValid = name.trim() !== "";
    setNameError(!isNameValid);

    if (isEmailValid && isNameValid) {
      await handleDownloadEbook();
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(!validateEmail(email));
  };

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      <Container container>
        <Grid item xs={12} sm={12}>
          {isMobile ? (
            <Header>
              Your Videos. <br />
              Your Audience. <br />
              No Takedowns. <br />
              Ever.
            </Header>
          ) : (
            <Header>Your Videos. Your Audience. No Takedowns. Ever.</Header>
          )}
        </Grid>
        <VideoBox>
          {showVideoPlayer ? (
            <YoutubeVideoContainer>
              <iframe
                src="https://www.youtube.com/embed/M01coUo0dVA?si=gJC29726RcXxxJsH&autoplay=1&rel=0"
                loading="lazy"
                title="How To Publish Videos To Q-Tube On Qortal"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </YoutubeVideoContainer>
          ) : (
            <YoutubePlaceholder
              className="creator-page-video"
              isModal={false}
              onClick={handleVideoClick}
              YoutubeThumbnail={"/images/Creators/UncensorableVideos.png"}
              YoutubeTitle="How To Publish Videos To Q-Tube On Qortal"
            />
          )}
        </VideoBox>
      </Container>
      <Features container>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer1>
            <PlayCircleSVG color={"#ffffff"} height="55" width="55" />
            <LockIcon color={"#8162f0"} height="13" width="13" />
          </IconContainer1>
          <SubHeader>Own Your Channel</SubHeader>
          <FeatureText>
            On Qortal, your channel lives on a peer-to-peer network, not on a
            company’s servers. That means that there are no takedowns, no
            strikes, and no sudden loss of your entire audience possible!
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer2>
            <QortalSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer2>
          <SubHeader>Keep 100% of Your Earnings</SubHeader>
          <FeatureText>
            There are no ads, no middlemen, and no platform cuts. You earn QORT
            through superlikes on your content, and keep 100% of the earnings!{" "}
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer3>
            <ConnectSVG color={"#ffffff"} height="42" width="42" />
          </IconContainer3>
          <SubHeader>Reach Your Audience Every Time</SubHeader>
          <FeatureText>
            No algorithms hiding your work. Every subscriber sees what you
            publish, exactly when you publish it.
          </FeatureText>
        </FeatureContainer>
        <CTARow>
          <ArrowImg
            src={"/images/Creators/Blue arrow.png"}
            alt="arrow"
            width={250}
            height={250}
          />
          <CTAButton
            onClick={() => {
              window.open("https://link.qortal.dev/call", "_blank");
            }}
          >
            BOOK A CALL
          </CTAButton>
          <CTAText>OR</CTAText>
          <CTABox>
            <EbookTooltip
              title="By downloading this ebook, you agree to receive emails from the Qortal community. You can unsubscribe at any time from the mailing list at any time by clicking the unsubscribe link at the bottom of the email."
              placement="top"
              open={showTooltip}
              onClose={() => setShowTooltip(false)}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              onBlur={() => setShowTooltip(false)}
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -5]
                      }
                    }
                  ]
                }
              }}
            >
              <InfoIconContainer
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(true)}
                style={{ cursor: "pointer" }}
              >
                <InfoIcon
                  color={theme.palette.text.primary}
                  width={"14"}
                  height={"14"}
                />
              </InfoIconContainer>
            </EbookTooltip>
            <CTABoxTitle>Get Your Free Ebook Copy</CTABoxTitle>
            <BookImage
              src="/images/Ebook/Ebook Design.png"
              alt="Understanding Qortal Book"
            />
            <CTABoxTextFieldContainer>
              <CustomInputField
                name="name"
                aria-label="name"
                label="Name"
                variant="filled"
                value={name}
                onChange={handleNameInputChange}
                required
                error={nameError}
                helperText={nameError ? "Please enter your name." : ""}
              />
              <CustomInputField
                name="email"
                label="E-Mail address"
                variant="filled"
                value={email}
                onChange={handleEmailInputChange}
                onBlur={handleEmailBlur}
                required
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address." : ""
                }
              />
            </CTABoxTextFieldContainer>
            <CTABoxButton onClick={handleDownloadClick}>
              Download Free Ebook
            </CTABoxButton>
          </CTABox>
        </CTARow>
      </Features>
    </>
  );
};

export default Creators;
