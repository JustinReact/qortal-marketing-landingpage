"use client";
import {
  PrivacyContainer,
  PrivacyHeader,
  PrivacySubContainer,
  PrivacySubTitle,
  PrivacyText
} from "../../components/Privacy/Privacy-styles";

const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyHeader>Privacy Policy for the Qortal Extension</PrivacyHeader>
      <PrivacySubContainer>
      <PrivacyText>
        The Qortal Extension is committed to protecting your privacy. This
        policy outlines our practices regarding the handling of information:
      </PrivacyText>
      <PrivacySubTitle>Information Handling:</PrivacySubTitle>
      <PrivacyText>
        The extension does not collect or transmit any personal or sensitive
        user data to external servers or databases. Information managed by the
        extension, including transaction details and wallet addresses, is stored
        locally on the user’s device to enhance performance and user experience.
      </PrivacyText>
      <PrivacySubTitle>Local Storage:</PrivacySubTitle>
      <PrivacyText>
        Data stored locally includes imported Qortal wallet, permission
        settings. This data is utilized solely to facilitate the functionality
        of the extension and is not accessible by any third party.
      </PrivacyText>
      <PrivacySubTitle>User Permissions:</PrivacySubTitle>
      <PrivacyText>
        The extension requires user permission to perform transactions on the
        Qortal blockchain. Each transaction initiated through the extension
        requires explicit user approval.
      </PrivacyText>
      <PrivacySubTitle>Changes to This Privacy Policy:</PrivacySubTitle>
      <PrivacyText>This policy is subject to changes and updates.</PrivacyText>
      </PrivacySubContainer>
    </PrivacyContainer>
  );
};

export default Privacy;