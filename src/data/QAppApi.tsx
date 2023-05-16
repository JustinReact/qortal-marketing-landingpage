import React from 'react'
import { Introduction } from '../components/Api/ApiSections/Introduction/Introduction'
import { Resources } from '../components/Api/ApiSections/Resources/Resources'
import { SharedIdentifiers } from '../components/Api/ApiSections/Resources/SharedIdentifiers'
import { DefaultResources } from '../components/Api/ApiSections/Resources/DefaultResources'
import { ServiceTypes } from '../components/Api/ApiSections/Resources/ServiceTypes'
import { SingleMultiFileResources } from '../components/Api/ApiSections/Resources/SingleMultiFileResources'
import { UpdatingResources } from '../components/Api/ApiSections/Resources/UpdatingResources'
import { Routing } from '../components/Api/ApiSections/Routing/Routing'
import { LinkingToResources } from '../components/Api/ApiSections/Routing/LinkingToResources'
import { LinkingToImages } from '../components/Api/ApiSections/Routing/LinkingToImages'
import { IntegrationIntroduction } from '../components/Api/ApiSections/JavascriptIntegration/IntegrationIntroduction'
import { Interaction } from '../components/Api/ApiSections/JavascriptIntegration/Interaction'
import { QortalRequestIntroduction } from '../components/Api/ApiSections/QortalRequest/QortalRequestIntroduction'
import { GET_USER_ACCOUNT } from '../components/Api/ApiSections/QortalRequest/GET_USER_ACCOUNT'
import { GET_ACCOUNT_DATA } from '../components/Api/ApiSections/QortalRequest/GET_ACCOUNT_DATA'
import { GET_ACCOUNT_NAMES } from '../components/Api/ApiSections/QortalRequest/GET_ACCOUNT_NAMES'
import { SEARCH_NAMES } from '../components/Api/ApiSections/QortalRequest/SEARCH_NAMES'
import { GET_NAME_DATA } from '../components/Api/ApiSections/QortalRequest/GET_NAME_DATA'
import { LIST_QDN_RESOURCES } from '../components/Api/ApiSections/QortalRequest/LIST_QDN_RESOURCES'
import { SEARCH_QDN_RESOURCES } from '../components/Api/ApiSections/QortalRequest/SEARCH_QDN_RESOURCES'
import { GET_QDN_RESOURCE_STATUS } from '../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_STATUS'
import { GET_QDN_RESOURCE_PROPERTIES } from '../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_PROPERTIES'
import { GET_QDN_RESOURCE_METADATA } from '../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_METADATA'
import { GET_QDN_RESOURCE_URL } from '../components/Api/ApiSections/QortalRequest/GET_QDN_RESOURCE_URL'

export const tableOfContents = [
  {
    title: 'Introduction',
    id: 'introduction',
    Component: (props: any) => <Introduction {...props} />
  },
  {
    title: 'Resources',
    Component: (props: any) => <Resources {...props} />,
    id: 'resources',
    subContent: [
      {
        title: 'Shared identifiers',
        id: 'sharedIdentifiers',
        Component: (props: any) => <SharedIdentifiers {...props} />
      },

      {
        title: "'Default' resources",
        id: 'defaultResources',
        Component: (props: any) => <DefaultResources {...props} />
      },
      {
        title: 'Service Types',
        id: 'serviceTypes',
        Component: (props: any) => <ServiceTypes {...props} />
      },
      {
        title: 'Single vs multi-file resources',
        id: 'singleMultiFileResources',
        Component: (props: any) => <SingleMultiFileResources {...props} />
      },
      {
        title: 'App-specific data',
        id: 'appSpecificData',
        Component: (props: any) => <SingleMultiFileResources {...props} />
      },
      {
        title: 'Updating resources',
        id: 'updatingResources',
        Component: (props: any) => <UpdatingResources {...props} />
      }
    ]
  },
  {
    title: 'Routing',
    Component: (props: any) => <Routing {...props} />,
    id: 'routing',
    subContent: [
      {
        title: 'Linking to other QDN websites / resources',
        id: 'linkingToResources',
        Component: (props: any) => <LinkingToResources {...props} />
      },
      {
        title: 'Linking to other QDN images',
        id: 'linkingToImages',
        Component: (props: any) => <LinkingToImages {...props} />
      }
    ]
  },
  {
    title: 'Integrating a Javascript app',
    Component: (props: any) => <IntegrationIntroduction {...props} />,
    id: 'integration',
    subContent: [
      {
        title: 'Api Interaction',
        id: 'apiInteraction',
        Component: (props: any) => <Interaction {...props} />
      }
    ]
  },
  {
    title: 'qortalRequest',
    Component: (props: any) => <QortalRequestIntroduction {...props} />,
    id: 'qortalRequestIntroduction',
    subContent: [
      {
        title: 'GET_USER_ACCOUNT',
        Component: (props: any) => <GET_USER_ACCOUNT {...props} />,
        id: 'GET_USER_ACCOUNT'
      },
      {
        title: 'GET_ACCOUNT_DATA',
        Component: (props: any) => <GET_ACCOUNT_DATA {...props} />,
        id: 'GET_ACCOUNT_DATA'
      },
      {
        title: 'GET_ACCOUNT_NAMES',
        Component: (props: any) => <GET_ACCOUNT_NAMES {...props} />,
        id: 'GET_ACCOUNT_NAMES'
      },
      {
        title: 'SEARCH_NAMES',
        Component: (props: any) => <SEARCH_NAMES {...props} />,
        id: 'SEARCH_NAMES'
      },
      {
        title: 'GET_NAME_DATA',
        Component: (props: any) => <GET_NAME_DATA {...props} />,
        id: 'GET_NAME_DATA'
      },
      {
        title: 'LIST_QDN_RESOURCES',
        Component: (props: any) => <LIST_QDN_RESOURCES {...props} />,
        id: 'LIST_QDN_RESOURCES'
      },
      {
        title: 'SEARCH_QDN_RESOURCES',
        Component: (props: any) => <SEARCH_QDN_RESOURCES {...props} />,
        id: 'SEARCH_QDN_RESOURCES'
      },
      {
        title: 'GET_QDN_RESOURCE_STATUS',
        Component: (props: any) => <GET_QDN_RESOURCE_STATUS {...props} />,
        id: 'GET_QDN_RESOURCE_STATUS'
      },
      {
        title: 'GET_QDN_RESOURCE_PROPERTIES',
        Component: (props: any) => <GET_QDN_RESOURCE_PROPERTIES {...props} />,
        id: 'GET_QDN_RESOURCE_PROPERTIES'
      },
      {
        title: 'GET_QDN_RESOURCE_METADATA',
        Component: (props: any) => <GET_QDN_RESOURCE_METADATA {...props} />,
        id: 'GET_QDN_RESOURCE_METADATA'
      },
      {
        title: 'GET_QDN_RESOURCE_URL',
        Component: (props: any) => <GET_QDN_RESOURCE_URL {...props} />,
        id: 'GET_QDN_RESOURCE_URL'
      },
      {
        title: 'LINK_TO_QDN_RESOURCE',
        component: ''
      },
      {
        title: 'FETCH_QDN_RESOURCE',
        component: ''
      },
      {
        title: 'PUBLISH_QDN_RESOURCE',
        component: ''
      },
      {
        title: 'PUBLISH_MULTIPLE_QDN_RESOURCES',
        component: ''
      },
      {
        title: 'DECRYPT_DATA',
        component: ''
      },
      {
        title: 'SAVE_FILE',
        component: ''
      },
      {
        title: 'GET_WALLET_BALANCE',
        component: ''
      },
      {
        title: 'GET_BALANCE',
        component: ''
      },
      {
        title: 'SEND_COIN',
        component: ''
      },
      {
        title: 'SEARCH_CHAT_MESSAGES',
        component: ''
      },
      {
        title: 'SEND_CHAT_MESSAGE',
        component: ''
      },
      {
        title: 'LIST_GROUPS',
        component: ''
      },
      {
        title: 'JOIN_GROUP',
        component: ''
      },
      {
        title: 'DEPLOY_AT',
        component: ''
      },
      {
        title: 'GET_AT',
        component: ''
      },
      {
        title: 'GET_AT_DATA',
        component: ''
      },
      {
        title: 'LIST_ATS',
        component: ''
      },
      {
        title: 'FETCH_BLOCK',
        component: ''
      },
      {
        title: 'FETCH_BLOCK_RANGE',
        component: ''
      },
      {
        title: 'SEARCH_TRANSACTIONS',
        component: ''
      },
      {
        title: 'GET_PRICE',
        component: ''
      },
      {
        title: 'GET_LIST_ITEMS',
        component: ''
      },
      {
        title: 'ADD_LIST_ITEMS',
        component: ''
      },
      {
        title: 'DELETE_LIST_ITEM',
        component: ''
      }
    ]
  }
]
