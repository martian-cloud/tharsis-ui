/**
 * @generated SignedSource<<9ea56e5b4b32d01312fcd76d2a04bbcd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupTreeContainerQuery$variables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  parentPath?: string | null;
  search?: string | null;
};
export type GroupTreeContainerQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"GroupTreeContainerFragment_groups" | "GroupTreeContainerFragment_me">;
};
export type GroupTreeContainerQuery = {
  response: GroupTreeContainerQuery$data;
  variables: GroupTreeContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "parentPath"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "search"
},
v6 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Variable",
    "name": "parentPath",
    "variableName": "parentPath"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "FULL_PATH_ASC"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v11 = [
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupTreeContainerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "GroupTreeContainerFragment_groups"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "GroupTreeContainerFragment_me"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "GroupTreeContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "GroupConnection",
        "kind": "LinkedField",
        "name": "groups",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v9/*: any*/),
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
                        "name": "updatedAt",
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
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fullPath",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v10/*: any*/),
                    "concreteType": "GroupConnection",
                    "kind": "LinkedField",
                    "name": "descendentGroups",
                    "plural": false,
                    "selections": (v11/*: any*/),
                    "storageKey": "descendentGroups(first:0)"
                  },
                  {
                    "alias": null,
                    "args": (v10/*: any*/),
                    "concreteType": "WorkspaceConnection",
                    "kind": "LinkedField",
                    "name": "workspaces",
                    "plural": false,
                    "selections": (v11/*: any*/),
                    "storageKey": "workspaces(first:0)"
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
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
        "args": (v6/*: any*/),
        "filters": [
          "search",
          "parentPath",
          "sort"
        ],
        "handle": "connection",
        "key": "GroupTreeContainer_groups",
        "kind": "LinkedHandle",
        "name": "groups"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v9/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
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
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v8/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e3f5a225c845f7268b205de52a05ede",
    "id": null,
    "metadata": {},
    "name": "GroupTreeContainerQuery",
    "operationKind": "query",
    "text": "query GroupTreeContainerQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n  $search: String\n  $parentPath: String\n) {\n  ...GroupTreeContainerFragment_groups\n  ...GroupTreeContainerFragment_me\n}\n\nfragment GroupTreeContainerFragment_groups on Query {\n  groups(after: $after, before: $before, first: $first, last: $last, search: $search, parentPath: $parentPath, sort: FULL_PATH_ASC) {\n    totalCount\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...GroupTreeFragment_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment GroupTreeContainerFragment_me on Query {\n  me {\n    __typename\n    ... on User {\n      admin\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment GroupTreeFragment_connection on GroupConnection {\n  totalCount\n  edges {\n    node {\n      id\n      ...GroupTreeListItemFragment_group\n    }\n  }\n}\n\nfragment GroupTreeListItemFragment_group on Group {\n  metadata {\n    updatedAt\n  }\n  id\n  name\n  description\n  fullPath\n  descendentGroups(first: 0) {\n    totalCount\n  }\n  workspaces(first: 0) {\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "55fb4dee059dd2ece8ac3273c3947f0b";

export default node;
