import { Introduction } from "../components/Api/ApiSections/Introduction/Introduction";
import { Resources } from "../components/Api/ApiSections/Resources/Resources";
import { SharedIdentifiers } from "../components/Api/ApiSections/Resources/SharedIdentifiers";
import { DefaultResources } from "../components/Api/ApiSections/Resources/DefaultResources";
import { ServiceTypes } from "../components/Api/ApiSections/Resources/ServiceTypes";
import { SingleMultiFileResources } from "../components/Api/ApiSections/Resources/SingleMultiFileResources";
import { UpdatingResources } from "../components/Api/ApiSections/Resources/UpdatingResources";
import { Routing } from "../components/Api/ApiSections/Routing/Routing";
import { LinkingToResources } from "../components/Api/ApiSections/Routing/LinkingToResources";
import { LinkingToImages } from "../components/Api/ApiSections/Routing/LinkingToImages";
import { IntegrationIntroduction } from "../components/Api/ApiSections/JavascriptIntegration/IntegrationIntroduction";
import { Interaction } from "../components/Api/ApiSections/JavascriptIntegration/Interaction";
import { QortalRequestIntroduction } from "../components/Api/ApiSections/QortalRequest/QortalRequestIntroduction";
import { GET_USER_ACCOUNT } from "../components/Api/ApiSections/QortalRequest/GET_USER_ACCOUNT";
import { GET_ACCOUNT_DATA } from "../components/Api/ApiSections/QortalRequest/GET_ACCOUNT_DATA";
import { GET_ACCOUNT_NAMES } from "../components/Api/ApiSections/QortalRequest/GET_ACCOUNT_NAMES";
import { SEARCH_NAMES } from "../components/Api/ApiSections/QortalRequest/SEARCH_NAMES";
import { GET_NAME_DATA } from "../components/Api/ApiSections/QortalRequest/GET_NAME_DATA";
import { LIST_QDN_RESOURCES } from "../components/Api/ApiSections/QortalRequest/LIST_QDN_RESOURCES";
import { SEARCH_QDN_RESOURCES } from "../components/Api/ApiSections/QortalRequest/SEARCH_QDN_RESOURCES";
import { GET_QDN_RESOURCE_STATUS } from "../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_STATUS";
import { GET_QDN_RESOURCE_PROPERTIES } from "../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_PROPERTIES";
import { GET_QDN_RESOURCE_METADATA } from "../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_METADATA";
import { GET_QDN_RESOURCE_URL } from "../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_URL";
import { LINK_TO_QDN_RESOURCE } from "../components/Api/ApiSections/QortalRequest/LINK_TO_QDN_RESOURCE";
import { FETCH_QDN_RESOURCE } from "../components/Api/ApiSections/QortalRequest/FETCH_QDN_RESOURCE";
import { PUBLISH_QDN_RESOURCE } from "../components/Api/ApiSections/QortalRequest/PUBLISH_QDN_RESOURCE";
import { DECRYPT_DATA } from "../components/Api/ApiSections/QortalRequest/DECRYPT_DATA";
import { SAVE_FILE } from "../components/Api/ApiSections/QortalRequest/SAVE_FILE";
import { GET_WALLET_BALANCE } from "../components/Api/ApiSections/QortalRequest/GET_WALLET_BALANCE";
import { GET_BALANCE } from "../components/Api/ApiSections/QortalRequest/GET_BALANCE";
import { SEND_COIN } from "../components/Api/ApiSections/QortalRequest/SEND_COIN";
import { SEARCH_CHAT_MESSAGES } from "../components/Api/ApiSections/QortalRequest/SEARCH_CHAT_MESSAGES";
import { SEND_CHAT_MESSAGE } from "../components/Api/ApiSections/QortalRequest/SEND_CHAT_MESSAGE";
import { LIST_GROUPS } from "../components/Api/ApiSections/QortalRequest/LIST_GROUPS";
import { JOIN_GROUP } from "../components/Api/ApiSections/QortalRequest/JOIN_GROUP";
import { FETCH_BLOCK } from "../components/Api/ApiSections/QortalRequest/FETCH_BLOCK";
import { SEARCH_TRANSACTIONS } from "../components/Api/ApiSections/QortalRequest/SEARCH_TRANSACTIONS";
import { GET_PRICE } from "../components/Api/ApiSections/QortalRequest/GET_PRICE";
import { LISTS } from "../components/Api/ApiSections/QortalRequest/LISTS";
import { AppSpecificData } from "../components/Api/ApiSections/Resources/AppSpecificData";
import { OPEN_NEW_TAB } from "../components/Api/ApiSections/QortalRequest/OPEN_NEW_TAB";
import { NOTIFICATIONS_PERMISSION } from "../components/Api/ApiSections/QortalRequest/NOTIFICATIONS_PERMISSION";
import { SEND_LOCAL_NOTIFICATION } from "../components/Api/ApiSections/QortalRequest/SEND_LOCAL_NOTIFICATION";
import { CREATE_POLL } from "../components/Api/ApiSections/QortalRequest/CREATE_POLL";
import { DEPLOY_AT } from "../components/Api/ApiSections/QortalRequest/DEPLOY_AT";
import { VOTE_ON_POLL } from "../components/Api/ApiSections/QortalRequest/VOTE_ON_POLL";
import { GET_DAY_SUMMARY } from "../components/Api/ApiSections/QortalRequest/GET_DAY_SUMMARY";
import { GET_USER_WALLET } from "../components/Api/ApiSections/QortalRequest/GET_USER_WALLET";
import { OPEN_PROFILE } from "../components/Api/ApiSections/QortalRequest/OPEN_PROFILE";
import { GET_PROFILE_DATA } from "../components/Api/ApiSections/QortalRequest/GET_PROFILE_DATA";
import { SET_PROFILE_DATA } from "../components/Api/ApiSections/QortalRequest/SET_PROFILE_DATA";
import { GET_FRIENDS_LIST } from "../components/Api/ApiSections/QortalRequest/GET_FRIENDS_LIST";
import { GET_USER_WALLET_INFO } from "../components/Api/ApiSections/QortalRequest/GET_USER_WALLET_INFO";
import { ENCRYPT_DATA } from "../components/Api/ApiSections/QortalRequest/ENCRYPT_DATA";

export const tableOfContents = [
  {
    title: "Introduction",
    id: "introduction",
    Component: (props: any) => <Introduction {...props} />
  },
  {
    title: "Resources",
    Component: (props: any) => <Resources {...props} />,
    id: "resources",
    subContent: [
      {
        title: "Shared identifiers",
        id: "sharedIdentifiers",
        Component: (props: any) => <SharedIdentifiers {...props} />
      },

      {
        title: "'Default' resources",
        id: "defaultResources",
        Component: (props: any) => <DefaultResources {...props} />
      },
      {
        title: "Service Types",
        id: "serviceTypes",
        Component: (props: any) => <ServiceTypes {...props} />
      },
      {
        title: "Single vs multi-file resources",
        id: "singleMultiFileResources",
        Component: (props: any) => <SingleMultiFileResources {...props} />
      },
      {
        title: "App-specific data",
        id: "appSpecificData",
        Component: (props: any) => <AppSpecificData {...props} />
      },
      {
        title: "Updating resources",
        id: "updatingResources",
        Component: (props: any) => <UpdatingResources {...props} />
      }
    ]
  },
  {
    title: "Routing",
    Component: (props: any) => <Routing {...props} />,
    id: "routing",
    subContent: [
      {
        title: "Linking to other QDN websites / resources",
        id: "linkingToResources",
        Component: (props: any) => <LinkingToResources {...props} />
      },
      {
        title: "Linking to other QDN images",
        id: "linkingToImages",
        Component: (props: any) => <LinkingToImages {...props} />
      }
    ]
  },
  {
    title: "Integrating a Javascript app",
    Component: (props: any) => <IntegrationIntroduction {...props} />,
    id: "integration",
    subContent: [
      {
        title: "Api Interaction",
        id: "apiInteraction",
        Component: (props: any) => <Interaction {...props} />
      }
    ]
  },
  {
    title: "qortalRequest",
    Component: (props: any) => <QortalRequestIntroduction {...props} />,
    id: "qortalRequestIntroduction",
    subContent: [
      {
        title: "CREATE_POLL",
        Component: (props: any) => <CREATE_POLL {...props} />,
        id: "CREATE_POLL"
      },
      {
        title: "DECRYPT_DATA",
        Component: (props: any) => <DECRYPT_DATA {...props} />,
        id: "DECRYPT_DATA"
      },
      {
        title: "DEPLOY_AT",
        Component: (props: any) => <DEPLOY_AT {...props} />,
        id: "DEPLOY_AT"
      },
      {
        title: "ENCRYPT_DATA",
        Component: (props: any) => <ENCRYPT_DATA {...props} />,
        id: "ENCRYPT_DATA"
      },
      {
        title: "FETCH_BLOCK",
        Component: (props: any) => <FETCH_BLOCK {...props} />,
        id: "FETCH_BLOCK"
      },
      {
        title: "FETCH_QDN_RESOURCE",
        Component: (props: any) => <FETCH_QDN_RESOURCE {...props} />,
        id: "FETCH_QDN_RESOURCE"
      },
      {
        title: "GET_ACCOUNT_DATA",
        Component: (props: any) => <GET_ACCOUNT_DATA {...props} />,
        id: "GET_ACCOUNT_DATA"
      },
      {
        title: "GET_ACCOUNT_NAMES",
        Component: (props: any) => <GET_ACCOUNT_NAMES {...props} />,
        id: "GET_ACCOUNT_NAMES"
      },
      {
        title: "GET_BALANCE",
        Component: (props: any) => <GET_BALANCE {...props} />,
        id: "GET_BALANCE"
      },
      {
        title: "GET_DAY_SUMMARY",
        Component: (props: any) => <GET_DAY_SUMMARY {...props} />,
        id: "GET_DAY_SUMMARY"
      },
      {
        title: "GET_FRIENDS_LIST",
        Component: (props: any) => <GET_FRIENDS_LIST {...props} />,
        id: "GET_FRIENDS_LIST"
      },
      {
        title: "GET_NAME_DATA",
        Component: (props: any) => <GET_NAME_DATA {...props} />,
        id: "GET_NAME_DATA"
      },
      {
        title: "GET_PRICE",
        Component: (props: any) => <GET_PRICE {...props} />,
        id: "GET_PRICE"
      },
      {
        title: "GET_QDN_RESOURCE_METADATA",
        Component: (props: any) => <GET_QDN_RESOURCE_METADATA {...props} />,
        id: "GET_QDN_RESOURCE_METADATA"
      },
      {
        title: "GET_QDN_RESOURCE_PROPERTIES",
        Component: (props: any) => <GET_QDN_RESOURCE_PROPERTIES {...props} />,
        id: "GET_QDN_RESOURCE_PROPERTIES"
      },
      {
        title: "GET_QDN_RESOURCE_STATUS",
        Component: (props: any) => <GET_QDN_RESOURCE_STATUS {...props} />,
        id: "GET_QDN_RESOURCE_STATUS"
      },
      {
        title: "GET_QDN_RESOURCE_URL",
        Component: (props: any) => <GET_QDN_RESOURCE_URL {...props} />,
        id: "GET_QDN_RESOURCE_URL"
      },
      {
        title: "GET_PROFILE_DATA",
        Component: (props: any) => <GET_PROFILE_DATA {...props} />,
        id: "GET_PROFILE_DATA"
      },
      {
        title: "GET_USER_ACCOUNT",
        Component: (props: any) => <GET_USER_ACCOUNT {...props} />,
        id: "GET_USER_ACCOUNT"
      },
      {
        title: "GET_USER_WALLET",
        Component: (props: any) => <GET_USER_WALLET {...props} />,
        id: "GET_USER_WALLET"
      },
      {
        title: "GET_USER_WALLET_INFO",
        Component: (props: any) => <GET_USER_WALLET_INFO {...props} />,
        id: "GET_USER_WALLET_INFO"
      },
      {
        title: "GET_WALLET_BALANCE",
        Component: (props: any) => <GET_WALLET_BALANCE {...props} />,
        id: "GET_WALLET_BALANCE"
      },
      {
        title: "JOIN_GROUP",
        Component: (props: any) => <JOIN_GROUP {...props} />,
        id: "JOIN_GROUP"
      },
      {
        title: "LINK_TO_QDN_RESOURCE",
        Component: (props: any) => <LINK_TO_QDN_RESOURCE {...props} />,
        id: "LINK_TO_QDN_RESOURCE"
      },
      {
        title: "LIST_QDN_RESOURCES",
        Component: (props: any) => <LIST_QDN_RESOURCES {...props} />,
        id: "LIST_QDN_RESOURCES"
      },
      {
        title: "LIST_GROUPS",
        Component: (props: any) => <LIST_GROUPS {...props} />,
        id: "LIST_GROUPS"
      },
      {
        title: "LISTS",
        Component: (props: any) => <LISTS {...props} />,
        id: "LISTS"
      },
      {
        title: "NOTIFICATIONS_PERMISSION",
        Component: (props: any) => <NOTIFICATIONS_PERMISSION {...props} />,
        id: "NOTIFICATIONS_PERMISSION"
      },
      {
        title: "OPEN_NEW_TAB",
        Component: (props: any) => <OPEN_NEW_TAB {...props} />,
        id: "OPEN_NEW_TAB"
      },
      {
        title: "OPEN_PROFILE",
        Component: (props: any) => <OPEN_PROFILE {...props} />,
        id: "OPEN_PROFILE"
      },
      {
        title: "PUBLISH_QDN_RESOURCE",
        Component: (props: any) => <PUBLISH_QDN_RESOURCE {...props} />,
        id: "PUBLISH_QDN_RESOURCE"
      },
      {
        title: "SAVE_FILE",
        Component: (props: any) => <SAVE_FILE {...props} />,
        id: "SAVE_FILE"
      },
      {
        title: "SEARCH_NAMES",
        Component: (props: any) => <SEARCH_NAMES {...props} />,
        id: "SEARCH_NAMES"
      },
      {
        title: "SEARCH_QDN_RESOURCES",
        Component: (props: any) => <SEARCH_QDN_RESOURCES {...props} />,
        id: "SEARCH_QDN_RESOURCES"
      },
      {
        title: "SEARCH_CHAT_MESSAGES",
        Component: (props: any) => <SEARCH_CHAT_MESSAGES {...props} />,
        id: "SEARCH_CHAT_MESSAGES"
      },

      {
        title: "SEARCH_TRANSACTIONS",
        Component: (props: any) => <SEARCH_TRANSACTIONS {...props} />,
        id: "SEARCH_TRANSACTIONS"
      },
      {
        title: "SEND_CHAT_MESSAGE",
        Component: (props: any) => <SEND_CHAT_MESSAGE {...props} />,
        id: "SEND_CHAT_MESSAGE"
      },
      {
        title: "SEND_COIN",
        Component: (props: any) => <SEND_COIN {...props} />,
        id: "SEND_COIN"
      },
      {
        title: "SEND_LOCAL_NOTIFICATION",
        Component: (props: any) => <SEND_LOCAL_NOTIFICATION {...props} />,
        id: "SEND_LOCAL_NOTIFICATION"
      },
      {
        title: "SET_PROFILE_DATA",
        Component: (props: any) => <SET_PROFILE_DATA {...props} />,
        id: "SET_PROFILE_DATA"
      },
      {
        title: "VOTE_ON_POLL",
        Component: (props: any) => <VOTE_ON_POLL {...props} />,
        id: "VOTE_ON_POLL"
      }
    ]
  }
];
