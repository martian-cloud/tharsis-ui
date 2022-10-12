/**
 * @generated SignedSource<<0e45ab85dd4c2b01142dca8ad9a3d5fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserAutocompleteQuery$variables = {
  search: string;
};
export type UserAutocompleteQuery$data = {
  readonly users: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string;
        readonly id: string;
        readonly username: string;
      } | null;
    } | null> | null;
  };
};
export type UserAutocompleteQuery = {
  response: UserAutocompleteQuery$data;
  variables: UserAutocompleteQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 50
      },
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "search"
      }
    ],
    "concreteType": "UserConnection",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserAutocompleteQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserAutocompleteQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b79e156c10f4ca8ff7ca1c5e99a8a51",
    "id": null,
    "metadata": {},
    "name": "UserAutocompleteQuery",
    "operationKind": "query",
    "text": "query UserAutocompleteQuery(\n  $search: String!\n) {\n  users(first: 50, search: $search) {\n    edges {\n      node {\n        id\n        username\n        email\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d742c893e64781d9c5dc053d4bf194ed";

export default node;
