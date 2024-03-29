import { ColumnContainer, RowContainer } from "./Common-styles";
import InfoIcon from "@mui/icons-material/Info";

export const InformationSection = ({ children }: any) => {
  return (
    <RowContainer>
      <InfoIcon />
      <ColumnContainer>{children}</ColumnContainer>
    </RowContainer>
  );
};
