/**
 * @generated SignedSource<<3b482b815dbd3e3268c73d20d214c1e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GPGKeyListFragment_keys$data = {
  readonly group: {
    readonly gpgKeys: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly gpgKeyId: string;
          readonly groupPath: string;
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"GPGKeyListItemFragment_key">;
        } | null;
      } | null> | null;
      readonly totalCount: number;
    };
  } | null;
  readonly " $fragmentType": "GPGKeyListFragment_keys";
};
export type GPGKeyListFragment_keys$key = {
  readonly " $data"?: GPGKeyListFragment_keys$data;
  readonly " $fragmentSpreads": FragmentRefs<"GPGKeyListFragment_keys">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "group",
  "gpgKeys"
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
      "operation": require('./GPGKeyListPaginationQuery.graphql')
    }
  },
  "name": "GPGKeyListFragment_keys",
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
          "alias": "gpgKeys",
          "args": [
            {
              "kind": "Literal",
              "name": "includeInherited",
              "value": true
            },
            {
              "kind": "Literal",
              "name": "sort",
              "value": "GROUP_LEVEL_DESC"
            }
          ],
          "concreteType": "GPGKeyConnection",
          "kind": "LinkedField",
          "name": "__GPGKeyList_gpgKeys_connection",
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
              "concreteType": "GPGKeyEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "GPGKey",
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
                      "name": "gpgKeyId",
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
                      "name": "GPGKeyListItemFragment_key"
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
          "storageKey": "__GPGKeyList_gpgKeys_connection(includeInherited:true,sort:\"GROUP_LEVEL_DESC\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "61ba20a8ee1b914ce5ccff15e9ee952a";

export default node;
