import React from "react";
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
        title: "GET_USER_ACCOUNT",
        Component: (props: any) => <GET_USER_ACCOUNT {...props} />,
        id: "GET_USER_ACCOUNT"
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
        title: "SEARCH_NAMES",
        Component: (props: any) => <SEARCH_NAMES {...props} />,
        id: "SEARCH_NAMES"
      },
      {
        title: "GET_NAME_DATA",
        Component: (props: any) => <GET_NAME_DATA {...props} />,
        id: "GET_NAME_DATA"
      },
      {
        title: "LIST_QDN_RESOURCES",
        Component: (props: any) => <LIST_QDN_RESOURCES {...props} />,
        id: "LIST_QDN_RESOURCES"
      },
      {
        title: "SEARCH_QDN_RESOURCES",
        Component: (props: any) => <SEARCH_QDN_RESOURCES {...props} />,
        id: "SEARCH_QDN_RESOURCES"
      },
      {
        title: "GET_QDN_RESOURCE_STATUS",
        Component: (props: any) => <GET_QDN_RESOURCE_STATUS {...props} />,
        id: "GET_QDN_RESOURCE_STATUS"
      },
      {
        title: "GET_QDN_RESOURCE_PROPERTIES",
        Component: (props: any) => <GET_QDN_RESOURCE_PROPERTIES {...props} />,
        id: "GET_QDN_RESOURCE_PROPERTIES"
      },
      {
        title: "GET_QDN_RESOURCE_METADATA",
        Component: (props: any) => <GET_QDN_RESOURCE_METADATA {...props} />,
        id: "GET_QDN_RESOURCE_METADATA"
      },
      {
        title: "GET_QDN_RESOURCE_URL",
        Component: (props: any) => <GET_QDN_RESOURCE_URL {...props} />,
        id: "GET_QDN_RESOURCE_URL"
      },
      {
        title: "LINK_TO_QDN_RESOURCE",
        Component: (props: any) => <LINK_TO_QDN_RESOURCE {...props} />,
        id: "LINK_TO_QDN_RESOURCE"
      },
      {
        title: "FETCH_QDN_RESOURCE",
        Component: (props: any) => <FETCH_QDN_RESOURCE {...props} />,
        id: "FETCH_QDN_RESOURCE"
      },
      {
        title: "PUBLISH_QDN_RESOURCE",
        Component: (props: any) => <PUBLISH_QDN_RESOURCE {...props} />,
        id: "PUBLISH_QDN_RESOURCE"
      },
      {
        title: "DECRYPT_DATA",
        Component: (props: any) => <DECRYPT_DATA {...props} />,
        id: "DECRYPT_DATA"
      },
      {
        title: "SAVE_FILE",
        Component: (props: any) => <SAVE_FILE {...props} />,
        id: "SAVE_FILE"
      },
      {
        title: "GET_WALLET_BALANCE",
        Component: (props: any) => <GET_WALLET_BALANCE {...props} />,
        id: "GET_WALLET_BALANCE"
      },
      {
        title: "GET_BALANCE",
        Component: (props: any) => <GET_BALANCE {...props} />,
        id: "GET_BALANCE"
      },
      {
        title: "SEND_COIN",
        Component: (props: any) => <SEND_COIN {...props} />,
        id: "SEND_COIN"
      },
      {
        title: "SEARCH_CHAT_MESSAGES",
        Component: (props: any) => <SEARCH_CHAT_MESSAGES {...props} />,
        id: "SEARCH_CHAT_MESSAGES"
      },
      {
        title: "SEND_CHAT_MESSAGE",
        Component: (props: any) => <SEND_CHAT_MESSAGE {...props} />,
        id: "SEND_CHAT_MESSAGE"
      },
      {
        title: "LIST_GROUPS",
        Component: (props: any) => <LIST_GROUPS {...props} />,
        id: "LIST_GROUPS"
      },
      {
        title: "JOIN_GROUP",
        Component: (props: any) => <JOIN_GROUP {...props} />,
        id: "JOIN_GROUP"
      },
      {
        title: "FETCH_BLOCK",
        Component: (props: any) => <FETCH_BLOCK {...props} />,
        id: "FETCH_BLOCK"
      },
      {
        title: "SEARCH_TRANSACTIONS",
        Component: (props: any) => <SEARCH_TRANSACTIONS {...props} />,
        id: "SEARCH_TRANSACTIONS"
      },
      {
        title: "GET_PRICE",
        Component: (props: any) => <GET_PRICE {...props} />,
        id: "GET_PRICE"
      },
      {
        title: "LISTS",
        Component: (props: any) => <LISTS {...props} />,
        id: "LISTS"
      }
    ]
  }
];
