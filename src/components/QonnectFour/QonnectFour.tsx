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
            <DoubleCaretRightIcon height="38px" width="38px" color={"#454545"} />
            <DoubleCaretRightIcon2 height="38px" width="38px" color={"#454545"} />
            <DoubleCaretRightIcon3 height="38px" width="38px" color={"#454545"} />
          </SliderContainer>
        </QonnectFourMainCol>
      </QonnectFourMainRow>
    </QonnectFourSection>
  );
};

export default QonnectFour;
