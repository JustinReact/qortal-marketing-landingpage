import { useState, FC } from "react";
import { Typography, Grid } from "@mui/material";
import { Wrapper, Column, StyledButton } from "./Home-styles";
import OperatingSystem from "../OperatingSystem/OperatingSystem";

// Define your component's props interface here
interface HomeProps {}

// Define your component here
const Home: FC<HomeProps> = (props) => {
  const [operatingSystem, setOperatingSystem] = useState<string>("");

  return (
    <Wrapper>
      <Typography
        fontSize="45px"
        fontFamily="Plus Jakarta Sans"
        letterSpacing="0.6px"
        lineHeight="65px"
        textAlign="center"
        sx={{ color: "primary.main", userSelect: "none" }}
      >
        Start building apps on the only <br /> fully decentralized blockchain:
        Qortal
      </Typography>
      <Typography
        variant="h2"
        fontFamily="Roboto"
        fontWeight="400"
        letterSpacing="0.3px"
        sx={{ userSelect: "none" }}
      >
        {!operatingSystem
          ? "Let's get set up. Firstly, which OS are you using?"
          : operatingSystem === "windows"
          ? "Windows Guide"
          : "Linux Guide"}
      </Typography>
      <Grid container spacing={2}>
        {!operatingSystem ? (
          <>
            <Column item xs={12} sm={6}>
              <StyledButton
                onClick={() => setOperatingSystem("windows")}
                variant="contained"
                color="primary"
                size="large"
              >
                Windows
              </StyledButton>
            </Column>
            <Column item xs={12} sm={6}>
              <StyledButton
                onClick={() => setOperatingSystem("linux")}
                variant="contained"
                color="primary"
                size="large"
              >
                Linux
              </StyledButton>
            </Column>
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </Grid>
    </Wrapper>
  );
};

export default Home;
