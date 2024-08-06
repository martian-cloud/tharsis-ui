/**
 * @generated SignedSource<<1fee2ea3c8c9072996b34dc0a7ccf8f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeActivityFeedFragment_activity$data = {
  readonly activityEvents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      } | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"ActivityEventListFragment_connection">;
  };
  readonly " $fragmentType": "HomeActivityFeedFragment_activity";
};
export type HomeActivityFeedFragment_activity$key = {
  readonly " $data"?: HomeActivityFeedFragment_activity$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeActivityFeedFragment_activity">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "activityEvents"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "username"
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
      "fragmentPathInResult": [],
      "operation": require('./HomeActivityFeedPaginationQuery.graphql')
    }
  },
  "name": "HomeActivityFeedFragment_activity",
  "selections": [
    {
      "alias": "activityEvents",
      "args": [
        {
          "kind": "Literal",
          "name": "sort",
          "value": "CREATED_DESC"
        },
        {
          "kind": "Variable",
          "name": "username",
          "variableName": "username"
        }
      ],
      "concreteType": "ActivityEventConnection",
      "kind": "LinkedField",
      "name": "__HomeActivityFeed_activityEvents_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ActivityEventEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ActivityEvent",
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
          "name": "ActivityEventListFragment_connection"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "960890cda9385c5c3f79ac7c2eaf1a5c";

export default node;
