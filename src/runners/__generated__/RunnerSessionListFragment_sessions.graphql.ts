/**
 * @generated SignedSource<<301ef9f5a393db9124e26ae9dbe86144>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type RunnerType = "group" | "shared" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RunnerSessionListFragment_sessions$data = {
  readonly id: string;
  readonly sessions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"RunnerSessionListItemFragment">;
      } | null;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly type: RunnerType;
  readonly " $fragmentType": "RunnerSessionListFragment_sessions";
};
export type RunnerSessionListFragment_sessions$key = {
  readonly " $data"?: RunnerSessionListFragment_sessions$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunnerSessionListFragment_sessions">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "sessions"
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
      "operation": require('./RunnerSessionListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "RunnerSessionListFragment_sessions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": "sessions",
      "args": [
        {
          "kind": "Literal",
          "name": "sort",
          "value": "LAST_CONTACTED_AT_DESC"
        }
      ],
      "concreteType": "RunnerSessionConnection",
      "kind": "LinkedField",
      "name": "__RunnerSessionList_sessions_connection",
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
          "concreteType": "RunnerSessionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RunnerSession",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RunnerSessionListItemFragment"
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__RunnerSessionList_sessions_connection(sort:\"LAST_CONTACTED_AT_DESC\")"
    },
    (v1/*: any*/)
  ],
  "type": "Runner",
  "abstractKey": null
};
})();

(node as any).hash = "d8b3141c25c4c3f89e8f76176b4f5cfc";

export default node;
