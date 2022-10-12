/**
 * @generated SignedSource<<d93bc2fda0d91832e105b598092a9a6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ManagedIdentityAutocompleteQuery$variables = {
  path: string;
  search: string;
};
export type ManagedIdentityAutocompleteQuery$data = {
  readonly namespace: {
    readonly managedIdentities: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly description: string;
          readonly id: string;
          readonly name: string;
          readonly resourcePath: string;
          readonly type: string;
        } | null;
      } | null> | null;
    };
  } | null;
};
export type ManagedIdentityAutocompleteQuery = {
  response: ManagedIdentityAutocompleteQuery$data;
  variables: ManagedIdentityAutocompleteQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "path"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "fullPath",
    "variableName": "path"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 50
    },
    {
      "kind": "Literal",
      "name": "includeInherited",
      "value": true
    },
    {
      "kind": "Variable",
      "name": "search",
      "variableName": "search"
    }
  ],
  "concreteType": "ManagedIdentityConnection",
  "kind": "LinkedField",
  "name": "managedIdentities",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ManagedIdentityEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ManagedIdentity",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "resourcePath",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ManagedIdentityAutocompleteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagedIdentityAutocompleteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dc1bdebb46639386e636fa822e09006f",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityAutocompleteQuery",
    "operationKind": "query",
    "text": "query ManagedIdentityAutocompleteQuery(\n  $path: String!\n  $search: String!\n) {\n  namespace(fullPath: $path) {\n    __typename\n    managedIdentities(first: 50, includeInherited: true, search: $search) {\n      edges {\n        node {\n          id\n          name\n          resourcePath\n          description\n          type\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f43bbd88ec455ba104454926f2538aa";

export default node;
