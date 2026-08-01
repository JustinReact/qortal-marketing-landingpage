export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: "installation",
    title: "Installation",
    items: [
      {
        id: "windows-smartscreen",
        question: "What should I do about the Windows SmartScreen warning?",
        answer:
          "When installing Qortal Hub or Qortal Core on Windows, SmartScreen may show a warning because the app is not yet widely recognized by Microsoft. This is normal for open-source software. Click \"More info\" on the warning dialog, then click \"Run anyway\" to proceed with the installation. The Qortal team already signs the app with a code signing certificate, so you can safely ignore the warning."
      },
      {
        id: "macos-gatekeeper",
        question: "How do I open Qortal on macOS when Gatekeeper blocks it?",
        answer:
          "macOS Gatekeeper may block Qortal on first launch with a message that the app cannot be opened because it is from an unidentified developer. To open it, right-click the Qortal app in Finder and select \"Open\", then confirm in the dialog. Alternatively, go to System Settings → Privacy & Security and click \"Open Anyway\" next to the Qortal entry. Visit [qortal.dev/downloads](/downloads) to download the latest version for your Mac."
      },
      {
        id: "antivirus-false-positives",
        question: "Why does my antivirus flag Qortal as suspicious?",
        answer:
          "Some antivirus programs flag Qortal Hub or Qortal Core as suspicious because node software communicates over peer-to-peer networks and writes blockchain data to disk. These are false positives. Add your Qortal installation folder to your antivirus exclusion list. On Windows this is typically in AppData; on macOS and Linux it is usually in your home directory under Qortal or .qortal."
      },
      {
        id: "sync-taking-long",
        question: "Why is my first sync taking so long?",
        answer:
          "The first sync downloads the full Qortal blockchain, which can take several hours depending on your internet connection, hardware, and whether you are running Qortal Core or connecting through a public node via Qortal Hub. This is a one-time process. Ensure your device stays awake and connected. Qortal Core runs a full node and syncs everything locally; Qortal Hub can connect to a public node for faster initial access with some limitations."
      },
      {
        id: "blockchain-data-storage",
        question: "Where is blockchain data stored on my device?",
        answer:
          "Qortal stores blockchain and node data locally on your device. Default locations vary by platform: on Windows, data is typically under %APPDATA%\\Qortal; on macOS, in ~/Qortal or ~/.qortal; on Linux, in ~/.qortal. You can change the data directory in Qortal Hub or Qortal Core settings if you need to use a different drive or location."
      }
    ]
  },
  {
    id: "accounts",
    title: "Accounts",
    items: [
      {
        id: "do-i-need-crypto",
        question: "Do I need crypto to create an account?",
        answer:
          "No. You do not need any cryptocurrency to create a Qortal account. Account creation is free. You will need a small amount of QORT later for network fees (about 0.01 QORT per blockchain action) and for registering your Qortal Name. Visit [qortal.dev/onboarding](/onboarding) to get started."
      },
      {
        id: "what-is-a-qortal-name",
        question: "What is a Qortal Name?",
        answer:
          "A Qortal Name is your human-readable identity on the Qortal network, similar to a username. It is required for messaging, publishing, using Q-Apps, and many other actions on Qortal. Registering a name is a one-time blockchain action that costs a small amount of QORT."
      },
      {
        id: "recover-account",
        question: "Can I recover my account if I lose access?",
        answer:
          "Your account can only be recovered using your seed phrase (also called a recovery phrase). Qortal has no centralized account recovery. There is no password reset or support team that can restore access. Write down your seed phrase and store it securely offline. If you lose it, your account and any QORT in it cannot be recovered."
      },
      {
        id: "seed-phrase-public-key-address",
        question:
          "What's the difference between a seed phrase, public key, and address?",
        answer:
          "Your seed phrase is the master secret that generates your entire account. Never share it with anyone. Your public key is the cryptographic identity derived from that seed; it proves you own the account without revealing the secret. Your address is a shorter identifier derived from the public key that is used for on-chain transactions and references. Think of the seed phrase as the root password, the public key as your identity, and the address as your account number."
      }
    ]
  },
  {
    id: "using-qortal",
    title: "Using Qortal",
    items: [
      {
        id: "why-transactions-cost-qort",
        question: "Why do transactions cost QORT?",
        answer:
          "Every blockchain action on Qortal incurs a small network fee of about 0.01 QORT. This fee is paid to the minters who validate blocks and keep the network secure. It is not a profit charge. It incentivizes decentralization by rewarding people who run nodes and validate the blockchain."
      },
      {
        id: "get-first-qort",
        question: "How do I get my first QORT?",
        answer:
          "The most decentralized way to get QORT is through Q-Trade inside Qortal Hub or Qortal Go. Create an account, fund your built-in Litecoin wallet from any exchange, then use Q-Trade to swap LTC for QORT via a trustless atomic swap. You can also receive QORT from community members, or purchase it on [NonKYC.io](https://nonkyc.io). Visit [qortal.dev/qort](/qort) for more details."
      },
      {
        id: "why-register-name",
        question: "Why do I need to register a name?",
        answer:
          "Registering a Qortal Name anchors your identity on the network. It is required for sending messages, joining groups, publishing content, and using most Q-Apps. Without a registered name, you can explore Qortal but cannot fully participate in the ecosystem. Name registration is a one-time action on the blockchain."
      },
      {
        id: "hub-vs-go",
        question: "What's the difference between Qortal Hub and Qortal Go?",
        answer:
          "Qortal Hub is the full desktop experience for Windows, macOS, and Linux. It gives you access to Q-Apps, messaging, groups, wallets, and publishing, and can run a local node or connect to a public node. Qortal Go is the mobile app for Android (with iOS access via the web app), a lightweight way to use Qortal on the go. Visit [qortal.dev/downloads](/downloads) to choose the right option for you."
      }
    ]
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    items: [
      {
        id: "is-qortal-decentralized",
        question: "Is Qortal decentralized?",
        answer:
          "Yes. Qortal is fully peer-to-peer with no centralized servers. The blockchain handles validation and consensus, while the Qortal Data Network (QDN) stores and serves content across independent nodes. The entire codebase is open-source. Your only connection to the traditional internet is your Internet Service Provider."
      },
      {
        id: "can-developers-read-messages",
        question: "Can Qortal developers read my messages?",
        answer:
          "No. Qortal does not operate centralized message servers, and the development team cannot read your private messages. Messaging on Qortal is handled through the decentralized network. Qortal Hub and Qortal Go do not collect or transmit your personal data to external servers."
      },
      {
        id: "is-data-encrypted",
        question: "Is my data encrypted?",
        answer:
          "Your wallet keys and seed phrase are stored locally on your device and are never sent to external servers. Content on the Qortal Data Network is distributed across peer nodes rather than stored on a central database. You are responsible for keeping your seed phrase secure. If it is lost or exposed, your account cannot be recovered."
      },
      {
        id: "how-updates-work",
        question: "How do Qortal updates work?",
        answer:
          "Qortal Hub, Qortal Go, and Qortal Core check for updates within the app. Updates are not forced without your action. You choose when to install them. All releases are open-source, so you can review changes before updating. Keep your software up to date for the latest features and security improvements."
      }
    ]
  }
];

export const allFaqItemIds = faqSections.flatMap((section) =>
  section.items.map((item) => item.id)
);

export const allFaqSectionIds = faqSections.map((section) => section.id);
