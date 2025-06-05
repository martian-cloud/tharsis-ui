/**
 * @generated SignedSource<<eeb55481aecb0bb4e44157ec4e25a08a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserPreferencesQuery$variables = Record<PropertyKey, never>;
export type UserPreferencesQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UserPreferencesFragment_preferences">;
};
export type UserPreferencesQuery = {
  response: UserPreferencesQuery$data;
  variables: UserPreferencesQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserPreferencesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserPreferencesFragment_preferences"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserPreferencesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserPreferences",
        "kind": "LinkedField",
        "name": "userPreferences",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GlobalUserPreferences",
            "kind": "LinkedField",
            "name": "globalPreferences",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNotificationPreference",
                "kind": "LinkedField",
                "name": "notificationPreference",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "scope",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "inherited",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "namespacePath",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "global",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserNotificationPreferenceCustomEvents",
                    "kind": "LinkedField",
                    "name": "customEvents",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "failedRun",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b5364041ed0060a4ca39efa30c021dac",
    "id": null,
    "metadata": {},
    "name": "UserPreferencesQuery",
    "operationKind": "query",
    "text": "query UserPreferencesQuery {\n  ...UserPreferencesFragment_preferences\n}\n\nfragment GlobalNotificationPreferenceFragment_notificationPreference on GlobalUserPreferences {\n  notificationPreference {\n    ...NotificationButtonFragment_notificationPreference\n  }\n}\n\nfragment NotificationButtonFragment_notificationPreference on UserNotificationPreference {\n  scope\n  inherited\n  namespacePath\n  global\n  customEvents {\n    failedRun\n  }\n}\n\nfragment UserPreferencesFragment_preferences on Query {\n  userPreferences {\n    globalPreferences {\n      ...GlobalNotificationPreferenceFragment_notificationPreference\n    }\n  }\n}\n"
  }
};

(node as any).hash = "4e735fe961c6413f1ec442a1c505e8c8";

export default node;
