/**
 * @generated SignedSource<<6c60820f3d238520bade1492c344bc7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagedIdentityListFragment_managedIdentities$data = {
  readonly group: {
    readonly managedIdentities: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly groupPath: string;
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityListItemFragment_managedIdentity">;
        } | null;
      } | null> | null;
      readonly totalCount: number;
    };
  } | null;
  readonly " $fragmentType": "ManagedIdentityListFragment_managedIdentities";
};
export type ManagedIdentityListFragment_managedIdentities$key = {
  readonly " $data"?: ManagedIdentityListFragment_managedIdentities$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityListFragment_managedIdentities">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "group",
  "managedIdentities"
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
      "operation": require('./ManagedIdentityListPaginationQuery.graphql')
    }
  },
  "name": "ManagedIdentityListFragment_managedIdentities",
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
          "alias": "managedIdentities",
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
          "concreteType": "ManagedIdentityConnection",
          "kind": "LinkedField",
          "name": "__ManagedIdentityList_managedIdentities_connection",
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
                      "name": "ManagedIdentityListItemFragment_managedIdentity"
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

(node as any).hash = "35f31e2d7e3e2f9b4d900a378ce26446";

export default node;
