import { Box, Grid, Typography, useTheme } from "@mui/material";
import { QortalSVG } from "../Common/Icons/QortalSVG";
import {
  BGImg,
  ColumnsContainer,
  ColumnsRow,
  DidYouKnowText,
  FeaturesBody,
  FeaturesButton,
  FeaturesCard,
  FeaturesColumn,
  FeaturesText,
  FeaturesTitle,
  HorizontalLine,
  ImageContainer,
  MainColumn,
  MainColumnText,
  MainColumnTitleFont,
  MainColumnTitleRow,
  ShowcaseContainer,
  ShowcaseSubContainer,
  ShowcaseTitle,
  ShowcaseTitleRow,
  TopImg,
  VerticalLine
} from "./Showcase-styles";
import { SecuritySVG } from "../Common/Icons/SecuritySVG";
import { VisibilityLockSVG } from "../Common/Icons/VisibilityLockSVG";
import { VPNLockSVG } from "../Common/Icons/VPNLockSVG";
import { RadioButtonSVG } from "../Common/Icons/RadioButtonSVG";
import { MoneyOffSVG } from "../Common/Icons/MoneyOffSVG";
import QShopScreenshot from "../../images/Home/Q-ShopScreenshot.png";
import QChatScreenshot from "../../images/Home/Q-ChatScreenshot.png";
import { useNavigate } from "react-router-dom";

export const Showcase = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ShowcaseContainer>
      <HorizontalLine>
        <VerticalLine />
      </HorizontalLine>
      {/* Comparisons to normal internet */}
      <ShowcaseSubContainer>
        <ShowcaseTitleRow>
          <ShowcaseTitle>
            <QortalSVG
              height={"30"}
              width={"30"}
              color={theme.palette.text.primary}
            />{" "}
            Why Qortal?
          </ShowcaseTitle>
        </ShowcaseTitleRow>
        <ColumnsContainer container>
          <DidYouKnowText>
            Did You Know That On The Current Internet...
          </DidYouKnowText>
          <ColumnsRow>
            <MainColumn>
              <MainColumnTitleRow>
                <Box>
                  <VisibilityLockSVG
                    height={"27"}
                    width={"27"}
                    color={"#2fafc0"}
                  />
                </Box>
                <MainColumnTitleFont>
                  Your personal data is often collected, sold, and exploited
                </MainColumnTitleFont>
              </MainColumnTitleRow>
              <MainColumnText>
                <Box>
                  <RadioButtonSVG
                    height={"10"}
                    width={"10"}
                    color={theme.palette.text.primary}
                  />
                </Box>
                Only you control your data on Qortal, and Q-Apps must request
                your permission to access it
              </MainColumnText>
            </MainColumn>
            <MainColumn>
              <MainColumnTitleRow>
                <Box>
                  <SecuritySVG height={"27"} width={"27"} color={"#d0e423"} />
                </Box>
                <MainColumnTitleFont>
                  Cyber attacks and data breaches are increasingly common
                </MainColumnTitleFont>
              </MainColumnTitleRow>
              <MainColumnText>
                <Box>
                  <RadioButtonSVG
                    height={"10"}
                    width={"10"}
                    color={theme.palette.text.primary}
                  />
                </Box>
                Qortal cannot be hacked or taken down, and all your data is tied
                to your name which you control wholly
              </MainColumnText>
            </MainColumn>
            <MainColumn>
              <MainColumnTitleRow>
                <Box>
                  <VPNLockSVG height={"27"} width={"27"} color={"#df3a2f"} />
                </Box>
                <MainColumnTitleFont>
                  Centralized giants dictate your online experience, leaving you
                  powerless and vulnerable
                </MainColumnTitleFont>
              </MainColumnTitleRow>
              <MainColumnText>
                <Box>
                  <RadioButtonSVG
                    height={"10"}
                    width={"10"}
                    color={theme.palette.text.primary}
                  />
                </Box>
                Experience true digital freedom on a decentralized network
                designed for the user. Completely peer-to-peer with no
                centralized intermediaries
              </MainColumnText>
            </MainColumn>
            <MainColumn>
              <MainColumnTitleRow>
                <Box>
                  <MoneyOffSVG height={"27"} width={"27"} color={"#41cf4d"} />
                </Box>
                <MainColumnTitleFont>
                  Traditional platforms exploit and profit from your online
                  activities, turning your privacy into a commodity without your
                  consent
                </MainColumnTitleFont>
              </MainColumnTitleRow>
              <MainColumnText>
                <Box>
                  <RadioButtonSVG
                    height={"10"}
                    width={"10"}
                    color={theme.palette.text.primary}
                  />
                </Box>
                On Qortal, you’re rewarded for your contributions and engagement
              </MainColumnText>
            </MainColumn>
          </ColumnsRow>
        </ColumnsContainer>
        {/* Qortal Features Card and redirect to features page*/}
        <FeaturesCard container>
          <FeaturesColumn item xs={12} lg={5}>
            <FeaturesTitle>
              Discover What Makes Qortal The Ideal Internet Replacement
            </FeaturesTitle>
            <FeaturesBody>
              <FeaturesText>
                <RadioButtonSVG
                  height={"10"}
                  width={"10"}
                  color={theme.palette.text.primary}
                />{" "}
                <span>Q-Apps: </span>Extend your possibilities with applications
                tailored for a decentralized web.
              </FeaturesText>
              <FeaturesText>
                <RadioButtonSVG
                  height={"10"}
                  width={"10"}
                  color={theme.palette.text.primary}
                />{" "}
                <span>Q-Chat: </span>Engage in private, secure conversations,
                reshaping how we communicate online.
              </FeaturesText>
              <FeaturesText>
                <RadioButtonSVG
                  height={"10"}
                  width={"10"}
                  color={theme.palette.text.primary}
                />{" "}
                <span>Integrated Wallet: </span>Experience seamless transactions
                with an in-built, user-friendly digital wallet.
              </FeaturesText>
              <FeaturesButton
                onClick={() => {
                  navigate("/features");
                }}
              >
                Explore The Possibilities
              </FeaturesButton>
            </FeaturesBody>
          </FeaturesColumn>
          <Grid item xs={12} lg={7}>
            <ImageContainer>
              <Box style={{ position: "relative" }}>
                <BGImg src={QShopScreenshot} alt="QShopScreenshot" />
                <TopImg src={QChatScreenshot} alt="QShopScreenshot" />
              </Box>
            </ImageContainer>
          </Grid>
        </FeaturesCard>
      </ShowcaseSubContainer>
    </ShowcaseContainer>
  );
};
