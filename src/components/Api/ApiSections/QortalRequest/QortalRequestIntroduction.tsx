import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  CustomListItem,
  CustomUnorderedList,
  ParagraphContainer,
  QortalIcon,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { useTheme } from "@mui/material";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
async function myfunction() {
  try {
      let res = await qortalRequest({
          action: "GET_ACCOUNT_DATA",
          address: "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2"
      });
      console.log(res); // Log the response to the console
  
  } catch(e) {
      console.log("Error: " + e);
  }
}
myfunction();
`.trim();

const codeBlock2 = `
const name = await qortalRequest({
  action: "GET_NAME_DATA",
  name: "QortalDemo"
});
`.trim();

export const QortalRequestIntroduction: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer>
          <SectionParagraph>
            To take things a step further, the qortalRequest() function can be
            used to interact with the user, in order to:
          </SectionParagraph>
          <CustomUnorderedList>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Request address and public key of the logged in account
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Publish data to QDN
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Send chat messages
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Join groups
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Deploy ATs (smart contracts)
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Send QORT or any supported foreign coin
            </CustomListItem>
            <CustomListItem>
              {" "}
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              Add/remove items from lists
            </CustomListItem>
          </CustomUnorderedList>

          <SectionParagraph>
            In addition to the above, qortalRequest() also supports many
            read-only functions that are also available via direct core API
            calls. Using qortalRequest() helps with futureproofing, as the core
            APIs can be modified without breaking functionality of existing
            Q-Apps.
          </SectionParagraph>
          <SubTitle>Making a request</SubTitle>
          <SectionParagraph>
            Qortal core will automatically inject the{" "}
            <Code>qortalRequest()</Code> javascript function to all
            websites/apps, which returns a Promise. This can be used to fetch
            data or publish data to the Qortal blockchain. This functionality
            supports async/await, as well as try/catch error handling.
          </SectionParagraph>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />

          <SubTitle>Timeouts</SubTitle>
          <SectionParagraph>
            Request timeouts are handled automatically when using
            qortalRequest(). The timeout value will differ based on the action
            being used - see <Code>getDefaultTimeout()</Code> in{" "}
            <a
              href="https://github.com/Qortal/qortal/blob/master/src/main/resources/q-apps/q-apps.js#L441"
              target="_blank"
            >
              q-apps.js
            </a>{" "}
            for the current values.
          </SectionParagraph>
          <SectionParagraph>
            If a request times out it will throw an error -{" "}
            <Code>The request timed out</Code> - which can be handled by the
            Q-App.
          </SectionParagraph>
          <SectionParagraph>
            It is also possible to specify a custom timeout using{" "}
            <Code>qortalRequestWithTimeout(request, timeout)</Code>, however
            this is discouraged. It's more reliable and futureproof to let the
            core handle the timeout values.
          </SectionParagraph>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
