/**
 * @generated SignedSource<<a7e681345cbb23cf59280f42fe09e11e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AdminAreaRunnersListPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
};
export type AdminAreaRunnersListPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AdminAreaRunnersListFragment_sharedRunners">;
};
export type AdminAreaRunnersListPaginationQuery = {
  response: AdminAreaRunnersListPaginationQuery$data;
  variables: AdminAreaRunnersListPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminAreaRunnersListPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AdminAreaRunnersListFragment_sharedRunners"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdminAreaRunnersListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RunnerConnection",
        "kind": "LinkedField",
        "name": "sharedRunners",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RunnerEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Runner",
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
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ResourceMetadata",
                    "kind": "LinkedField",
                    "name": "metadata",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
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
                    "name": "disabled",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdBy",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "AdminAreaRunnersList_sharedRunners",
        "kind": "LinkedHandle",
        "name": "sharedRunners"
      }
    ]
  },
  "params": {
    "cacheID": "924423cc17b2876d366e326882d9d0a9",
    "id": null,
    "metadata": {},
    "name": "AdminAreaRunnersListPaginationQuery",
    "operationKind": "query",
    "text": "query AdminAreaRunnersListPaginationQuery(\n  $after: String\n  $first: Int\n) {\n  ...AdminAreaRunnersListFragment_sharedRunners\n}\n\nfragment AdminAreaRunnersListFragment_sharedRunners on Query {\n  sharedRunners(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...RunnerListFragment_runners\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RunnerListFragment_runners on RunnerConnection {\n  edges {\n    node {\n      id\n      ...RunnerListItemFragment_runner\n    }\n  }\n}\n\nfragment RunnerListItemFragment_runner on Runner {\n  metadata {\n    createdAt\n  }\n  id\n  name\n  disabled\n  createdBy\n}\n"
  }
};
})();

(node as any).hash = "4b6650cee7cea445fdea51ab16c62fb1";

export default node;
