/**
 * @generated SignedSource<<486f62922b196a963150f253213ef0cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeTeamListFragment_teams$data = {
  readonly id: string;
  readonly teams: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"HomeTeamListItemFragment_team">;
      } | null;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly " $fragmentType": "HomeTeamListFragment_teams";
};
export type HomeTeamListFragment_teams$key = {
  readonly " $data"?: HomeTeamListFragment_teams$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeTeamListFragment_teams">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "teams"
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
      "operation": require('./HomeTeamListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "HomeTeamListFragment_teams",
  "selections": [
    {
      "alias": "teams",
      "args": [
        {
          "kind": "Literal",
          "name": "sort",
          "value": "NAME_ASC"
        }
      ],
      "concreteType": "TeamConnection",
      "kind": "LinkedField",
      "name": "__HomeTeamList_teams_connection",
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
          "concreteType": "TeamEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Team",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "HomeTeamListItemFragment_team"
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
      "storageKey": "__HomeTeamList_teams_connection(sort:\"NAME_ASC\")"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "3375f1e450b84df963a7955cdcd53bf7";

export default node;
