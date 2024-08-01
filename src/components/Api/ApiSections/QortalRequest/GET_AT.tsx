import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  InformationParagraph,
  ParagraphContainer,
  SectionContainer,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import { Grid } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
import { LinkApi } from "../Common/LinkApi";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "GET_AT",
  atAddress: "ASRUsCjk6fa5bujv3oWYmWaVqNtvxydpPH"
});
`.trim();

const codeBlockResponse = `
{
  "ATAddress": "ASRUsCjk6fa5bujv3oWYmWaVqNtvxydpPH",
  "creatorPublicKey": "APLQ85zRbgRdrLTU7GgeTt35kvVhxmSjoCB4wX99HjYd",
  "creation": 1660927812037,
  "version": 2,
  "assetId": 0,
  "codeBytes": "2nPtkneX6tMghnEAt3H9rnbRE8KNm5vZ7Cqr3w1tq6N91enhdZXeWCwFZJRBep5rYxDXMbMWYQPbUB4VyhoDu3NDFGfJbzcnDNFMFTbsgaJEvdiGbYnoBCiiCeQvfnNTLZ1oMF3WBTJJ5Z28qnkt9Bbkg97H4k3StWGXEKQqsDkpNTJkMqZ8Kf8SruHg9ECZ6tfg9LwaHfthQ4DmatsdVVs7zKYnpXvA6zVjzgLjmzc2WdMWDzt9huZ8K6m51CUv5DtwZzC8oU3VBk9qdqCwDgu3W96g9Mkbb9n8iKRsJLoNfuB9UdsegpZD9VtzUK8EkGyhEJLfvCWhJExE44eujMaH694A2wRtB8uvubirDzm8hzwmr4mSAYbutHmkrsxs3b5vDGPVChL1nyGUHGf4Zn1HDFm9X4TYWVE5ntYiTkunnykxUExgdYpxotRvTsemzTabQawJhzmzaViq8TdxaAybnCvGm7DugsXEWjENEAXXk7pcbaLVEy91Uk88kGcGBCQqE636a6dMzWYVpMkVsV8GhoECuqgEsTR3cuf26xykMoSr6seqKf5tPutD7L52Hzy7aEjJQeVfc7sJv565aLxqq85gb3BqWkLjo3oWK8u5AtmhWB99Cjc1oneL5X8XJstrqXmqiGWtZLTqEaquDmwohh4qbukvRfLFUXiX4WC3CSbGNUwBsFGqsztzhobd9YQB225hMyy4mf9xHyR8dzP",
  "codeHash": "HyKCg5oiwMKkRrZKk1e5gET27kfrEVUwCNXGQALXqg9x",
  "isSleeping": false,
  "isFinished": true,
  "hadFatalError": false,
  "isFrozen": false
}
`.trim();

export const GET_AT: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer
          sx={{
            width: "100%"
          }}
        >
          <SubTitle>Fetch info associated with AT address</SubTitle>
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{" "}
              <LinkApi url="api-documentation/#/Automated%20Transactions/getByAddress">
                <Code>{`/at/{atAddress}`}</Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCode codeBlock={codeBlock1} language="javascript" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DisplayCodeResponse
                codeBlock={codeBlockResponse}
                language="javascript"
              />
            </Grid>
          </Grid>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
