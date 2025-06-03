/**
 * @generated SignedSource<<8b82c7963445fd2a0eb2f8370b44ed99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RootQuery$variables = Record<PropertyKey, never>;
export type RootQuery$data = {
  readonly me: {
    readonly admin?: boolean;
    readonly email?: string;
    readonly id?: string;
    readonly username?: string;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AppHeaderFragment">;
};
export type RootQuery = {
  response: RootQuery$data;
  variables: RootQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "admin",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppHeaderFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Version",
        "kind": "LinkedField",
        "name": "version",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "apiVersion",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dbMigrationVersion",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dbMigrationDirty",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "apiBuildTimestamp",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c48b554d505af6130ad8e8d5ecbfc6c",
    "id": null,
    "metadata": {},
    "name": "RootQuery",
    "operationKind": "query",
    "text": "query RootQuery {\n  me {\n    __typename\n    ... on User {\n      id\n      username\n      email\n      admin\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...AppHeaderFragment\n}\n\nfragment AccountMenuFragment on Query {\n  me {\n    __typename\n    ... on User {\n      username\n      admin\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  version {\n    apiVersion\n    dbMigrationVersion\n    dbMigrationDirty\n    apiBuildTimestamp\n  }\n}\n\nfragment AppHeaderFragment on Query {\n  ...AccountMenuFragment\n}\n"
  }
};
})();

(node as any).hash = "3ee9a95b37ba5ec08b645bd9605f9b5f";

export default node;
