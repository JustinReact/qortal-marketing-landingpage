import { styled } from '@mui/system';
import HexagonBG from "../../../images/Home/HexagonBG.png";

export const Wrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  padding: '2rem 1rem',
  gap: '20px',
  "&.BGImage": {
    backgroundImage: `url(${HexagonBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundPosition: "center center",
    "@media (max-width: 600px)": {
      backgroundPosition: "20% center",
      backgroundSize: "auto"
    }
  }
})