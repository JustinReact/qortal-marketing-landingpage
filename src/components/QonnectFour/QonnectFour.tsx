import React, { useState } from "react";
import ReactGA from "react-ga4";
import {
  BubbleBoard,
  BubbleCard,
  BubbleCardColored,
  DoubleCaretRightIcon,
  DoubleCaretRightIcon2,
  DoubleCaretRightIcon3,
  QonnectFourCol,
  QonnectFourHeader,
  QonnectFourMainCol,
  QonnectFourMainRow,
  QonnectFourRow,
  QonnectFourSection,
  QonnectFourText,
  SliderContainer,
  SliderText,
  StyledSlider
} from "./QonnectFour-styles";

const QonnectFour = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSlideChange = async (event: any, value: number | number[]) => {
    const newValue = typeof value === "number" ? value : value[0];
    if (sliderValue < 95) {
      setSliderValue(0);
    } else {
      setSliderValue(newValue as number);
      ReactGA.event({
        category: "User",
        action: "Slid Qonnect Four slider",
        label: "Slid Qonnect Four slider"
      });
      window.open("https://www.qort.games", "_blank");
    }
  };

  return (
    <QonnectFourSection>
      <QonnectFourHeader>
        Play{" "}
        <a
          href="https://www.qort.games"
          aria-label="Visit qort games official website"
          target="_blank"
          rel="noopener noreferrer"
        >
          QORT Games
        </a>
        : The Ultimate Web2 and Web3 Fusion Games!
      </QonnectFourHeader>
      <QonnectFourMainRow>
        <QonnectFourMainCol>
          <BubbleBoard>
            {/* Row 1 */}
            <BubbleCard />
            <BubbleCardColored />
            <BubbleCard>F</BubbleCard>
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            {/* Row 2 */}
            <BubbleCard />
            <BubbleCard>Q</BubbleCard>
            <BubbleCardColored />
            <BubbleCard>N</BubbleCard>
            <BubbleCard>N</BubbleCard>
            <BubbleCard>E</BubbleCard>
            <BubbleCard>C</BubbleCard>
            <BubbleCard>T</BubbleCard>
            <BubbleCard />
            {/* Row 3 */}
            <BubbleCard />
            <BubbleCard />
            <BubbleCard>U</BubbleCard>
            <BubbleCardColored />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            {/* Row 4 */}
            <BubbleCard />
            <BubbleCard />
            <BubbleCard>R</BubbleCard>
            <BubbleCard />
            <BubbleCardColored />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
            <BubbleCard />
          </BubbleBoard>
          <SliderContainer>
            <SliderText>SWIPE TO PLAY</SliderText>
            <StyledSlider
              value={sliderValue}
              onChange={(event, value) =>
                setSliderValue(typeof value === "number" ? value : value[0])
              }
              onChangeCommitted={handleSlideChange}
              aria-labelledby="continuous-slider"
            />
            <DoubleCaretRightIcon height="38px" width="38px" color="none" />
            <DoubleCaretRightIcon2 height="38px" width="38px" color="none" />
            <DoubleCaretRightIcon3 height="38px" width="38px" color="none" />
          </SliderContainer>
        </QonnectFourMainCol>
        <QonnectFourCol>
          <QonnectFourRow>
            <QonnectFourText>
              Dive into <span style={{ fontWeight: "bold" }}>QONNECT4</span>, a
              thrilling Connect Four game crafted from scratch by our team.
            </QonnectFourText>
          </QonnectFourRow>
          <QonnectFourRow>
            <QonnectFourText>
              To <span style={{ fontWeight: "bold" }}>PLAY</span>, simply
              connect to your Qortal Wallet to approve a 0.25 QORT payment. The
              winner of a best-of-three match takes the total pot of 0.50 QORT.
            </QonnectFourText>
          </QonnectFourRow>
          <QonnectFourRow>
            <QonnectFourText>
              Experience the seamless integration of Web2 entertainment and Web3
              innovation, all powered by the{" "}
              <span style={{ fontStyle: "italic" }}>Qortal Blockchain</span>.
            </QonnectFourText>
          </QonnectFourRow>
        </QonnectFourCol>
      </QonnectFourMainRow>
    </QonnectFourSection>
  );
};

export default QonnectFour;
