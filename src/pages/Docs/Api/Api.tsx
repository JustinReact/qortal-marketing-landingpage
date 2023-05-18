import { Box, useTheme } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { Typography } from "@mui/material";
import {
  LeftDrawerLinks,
  drawerWidth
} from "../../../components/Api/LeftDrawerLinks/LeftDrawerLinks";
import { Wrapper } from "./Api-styles";
import { tableOfContents } from "../../../data/QAppApi";

export interface ApiProps {
  setTheme: (val: string) => void;
}

const Api: FC<ApiProps> = ({ setTheme }) => {
  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <Wrapper>
      <LeftDrawerLinks setTheme={setTheme} selectedSection={selectedSection} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Box>
          {tableOfContents.map(({ Component, index, ...props }: any) => {
            if (!Component) return null;
            return (
              <Fragment key={index}>
                <Component {...props} setSelectedSection={setSelectedSection} />
                {props?.subContent?.map(
                  ({ Component: Component2, index, ...props2 }: any) => {
                    if (!Component2) return null;
                    return (
                      <Component2
                        key={index}
                        {...props2}
                        setSelectedSection={setSelectedSection}
                      />
                    );
                  }
                )}
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Api;
