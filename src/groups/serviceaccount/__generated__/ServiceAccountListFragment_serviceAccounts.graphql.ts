/**
 * @generated SignedSource<<44de9a1ceb1326f110bdbf5ddd25e6d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ServiceAccountListFragment_serviceAccounts$data = {
  readonly group: {
    readonly serviceAccounts: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly groupPath: string;
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"ServiceAccountListItemFragment_serviceAccount">;
        } | null | undefined;
      } | null | undefined> | null | undefined;
      readonly totalCount: number;
    };
  } | null | undefined;
  readonly " $fragmentType": "ServiceAccountListFragment_serviceAccounts";
};
export type ServiceAccountListFragment_serviceAccounts$key = {
  readonly " $data"?: ServiceAccountListFragment_serviceAccounts$data;
  readonly " $fragmentSpreads": FragmentRefs<"ServiceAccountListFragment_serviceAccounts">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "group",
  "serviceAccounts"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "before"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "groupPath"
    },
    {
      "kind": "RootArgument",
      "name": "last"
    },
    {
      "kind": "RootArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./ServiceAccountListPaginationQuery.graphql')
    }
  },
  "name": "ServiceAccountListFragment_serviceAccounts",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "fullPath",
          "variableName": "groupPath"
        }
      ],
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "group",
      "plural": false,
      "selections": [
        {
          "alias": "serviceAccounts",
          "args": [
            {
              "kind": "Literal",
              "name": "includeInherited",
              "value": true
            },
            {
              "kind": "Variable",
              "name": "search",
              "variableName": "search"
            },
            {
              "kind": "Literal",
              "name": "sort",
              "value": "GROUP_LEVEL_DESC"
            }
          ],
          "concreteType": "ServiceAccountConnection",
          "kind": "LinkedField",
          "name": "__ServiceAccountList_serviceAccounts_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ServiceAccountEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ServiceAccount",
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
                      "name": "groupPath",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ServiceAccountListItemFragment_serviceAccount"
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "16e0b15730f2b84496afb48f04a809af";

export default node;
