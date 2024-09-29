import { AdditionalListeners } from "../components/Api/ApiSectionsExtension/AdditionalListeners/AdditionalListeners";
import { Introduction} from "../components/Api/ApiSectionsExtension/Introduction/Introduction";
import { REQUEST_AUTHENTICATION } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_AUTHENTICATION";
import { REQUEST_BUY_ORDER } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_BUY_ORDER";
import { REQUEST_CLOSE_POPUP } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_CLOSE_POPUP";
import { REQUEST_CONNECTION } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_CONNECTION";
import { REQUEST_IS_INSTALLED } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_IS_INSTALLED";
import { REQUEST_LTC_BALANCE } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_LTC_BALANCE";
import { REQUEST_OAUTH } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_OAUTH";
import { REQUEST_SEND_QORT } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_SEND_QORT";
import { REQUEST_USER_INFO } from "../components/Api/ApiSectionsExtension/RequestTypes/REQUEST_USER_INFO";
import { RequestTypes } from "../components/Api/ApiSectionsExtension/RequestTypes/RequestTypes";
import { AddListener } from "../components/Api/ApiSectionsExtension/Resources/AddListener";
import { AllTogether } from "../components/Api/ApiSectionsExtension/Resources/AllTogether";
import { HowItWorks } from "../components/Api/ApiSectionsExtension/Resources/HowItWorks";
import { SendingARequest } from "../components/Api/ApiSectionsExtension/Resources/SendingARequest";
import { Setup } from "../components/Api/ApiSectionsExtension/Resources/Setup";


export const tableOfContents = [
  {
    title: "Extension API Introduction",
    id: "introduction",
    Component: (props: any) => <Introduction {...props} />
  },
  {
    title: "Setup",
    Component: (props: any) => <Setup {...props} />,
    id: "setup",
    subContent: [
      {
        title: "How it works",
        id: "howItWorks",
        Component: (props: any) => <HowItWorks {...props} />
      },
      {
        title: "Sending a request",
        id: "sendingARequest",
        Component: (props: any) => <SendingARequest {...props} />
      },
      {
        title: "Add listener",
        id: "addListener",
        Component: (props: any) => <AddListener {...props} />
      },
      {
        title: "All together- React example",
        id: "allTogether",
        Component: (props: any) => <AllTogether {...props} />
      },
    ]
  },
  {
    title: "Request types",
    Component: (props: any) => <RequestTypes {...props} />,
    id: "requestTypes",
    subContent: [
      {
        title: "REQUEST_IS_INSTALLED",
        id: "REQUEST_IS_INSTALLED",
        Component: (props: any) => <REQUEST_IS_INSTALLED {...props} />
      },
      {
        title: "REQUEST_CONNECTION",
        id: "REQUEST_CONNECTION",
        Component: (props: any) => <REQUEST_CONNECTION {...props} />
      },
      {
        title: "REQUEST_AUTHENTICATION",
        id: "REQUEST_AUTHENTICATION",
        Component: (props: any) => <REQUEST_AUTHENTICATION {...props} />
      },
      {
        title: "REQUEST_USER_INFO",
        id: "REQUEST_USER_INFO",
        Component: (props: any) => <REQUEST_USER_INFO {...props} />
      },
      {
        title: "REQUEST_OAUTH",
        id: "REQUEST_OAUTH",
        Component: (props: any) => <REQUEST_OAUTH {...props} />
      },
      {
        title: "REQUEST_SEND_QORT",
        id: "REQUEST_SEND_QORT",
        Component: (props: any) => <REQUEST_SEND_QORT {...props} />
      },
      {
        title: "REQUEST_CLOSE_POPUP",
        id: "REQUEST_CLOSE_POPUP",
        Component: (props: any) => <REQUEST_CLOSE_POPUP {...props} />
      },
      {
        title: "REQUEST_LTC_BALANCE",
        id: "REQUEST_LTC_BALANCE",
        Component: (props: any) => <REQUEST_LTC_BALANCE {...props} />
      },
      {
        title: "REQUEST_BUY_ORDER",
        id: "REQUEST_BUY_ORDER",
        Component: (props: any) => <REQUEST_BUY_ORDER {...props} />
      }
    ]
  },
  {
    title: "Additional listeners",
    Component: (props: any) => <AdditionalListeners {...props} />,
    id: "additionalListeners",
    subContent: [ ]
  }
];
