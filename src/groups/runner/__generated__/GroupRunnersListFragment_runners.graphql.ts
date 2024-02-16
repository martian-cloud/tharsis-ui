/**
 * @generated SignedSource<<608d23e047c51120bec80fdb235c4f1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupRunnersListFragment_runners$data = {
  readonly id: string;
  readonly runners: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      } | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"RunnerListFragment_runners">;
  };
  readonly " $fragmentType": "GroupRunnersListFragment_runners";
};
export type GroupRunnersListFragment_runners$key = {
  readonly " $data"?: GroupRunnersListFragment_runners$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupRunnersListFragment_runners">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "runners"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./GroupRunnersListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "GroupRunnersListFragment_runners",
  "selections": [
    {
      "alias": "runners",
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
      "concreteType": "RunnerConnection",
      "kind": "LinkedField",
      "name": "__GroupRunnersList_runners_connection",
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
                (v1/*: any*/),
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "RunnerListFragment_runners"
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
      "storageKey": "__GroupRunnersList_runners_connection(includeInherited:true,sort:\"GROUP_LEVEL_DESC\")"
    },
    (v1/*: any*/)
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "1f66d20a748b286895f404e41a8901c8";

export default node;
