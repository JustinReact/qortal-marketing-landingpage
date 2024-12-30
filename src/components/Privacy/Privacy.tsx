"use client";
import {
  PrivacyContainer,
  PrivacyHeader,
  PrivacySubContainer,
  PrivacySubTitle,
  PrivacyText
} from "./Privacy-styles";

const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyHeader>
        Privacy Policy for the Qortal Hub, Qortal Go, and Qortal Extension
      </PrivacyHeader>
      <PrivacySubContainer>
        <PrivacyText>
          Qortal is committed to protecting your privacy. This policy outlines
          our practices regarding the handling of information:
        </PrivacyText>
        <PrivacySubTitle>Information Handling:</PrivacySubTitle>
        <PrivacyText>
          Qortal Hub, Qortal Go, and Qortal Extension does not collect or
          transmit any personal or sensitive user data to external servers or
          databases. Information managed by the extension, including transaction
          details and wallet addresses, is stored locally on the user’s device
          to enhance performance and user experience.
        </PrivacyText>
        <PrivacySubTitle>Local Storage:</PrivacySubTitle>
        <PrivacyText>
          Data stored locally includes imported Qortal wallet, permission
          settings. This data is utilized solely to facilitate the functionality
          of the extension and is not accessible by any third party.
        </PrivacyText>
        <PrivacySubTitle>User Permissions:</PrivacySubTitle>
        <PrivacyText>
          Qortal Hub, Qortal Go, and Qortal Extension requires user permission
          to perform transactions on the Qortal blockchain. Each transaction
          initiated through the extension requires explicit user approval.
        </PrivacyText>
        <PrivacySubTitle>Limitation of Liability:</PrivacySubTitle>
        <PrivacyText>
          By using Qortal Hub, Qortal Go, and Qortal Extension, you acknowledge
          and agree that the developers and maintainers of Qortal are not
          responsible or liable for any loss, theft, or mismanagement of QORT or
          other digital assets, whether due to hacking, unauthorized access, or
          user error, including lost wallets or private keys. Users are solely
          responsible for securing their devices, wallets, and private keys.
          Qortal and its developers provide this software "as is" without
          warranties of any kind, either express or implied.
        </PrivacyText>
        <PrivacySubTitle>Changes to This Privacy Policy:</PrivacySubTitle>
        <PrivacyText>
          This policy is subject to changes and updates.
        </PrivacyText>
      </PrivacySubContainer>
    </PrivacyContainer>
  );
};

export default Privacy;
