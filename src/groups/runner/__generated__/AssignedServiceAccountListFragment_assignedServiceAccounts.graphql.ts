/**
 * @generated SignedSource<<e79f2dd734244332a3653e5a9c40985b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AssignedServiceAccountListFragment_assignedServiceAccounts$data = {
  readonly assignedServiceAccounts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ServiceAccountListItemFragment_serviceAccount">;
      } | null;
    } | null> | null;
    readonly totalCount: number;
  };
  readonly id: string;
  readonly " $fragmentType": "AssignedServiceAccountListFragment_assignedServiceAccounts";
};
export type AssignedServiceAccountListFragment_assignedServiceAccounts$key = {
  readonly " $data"?: AssignedServiceAccountListFragment_assignedServiceAccounts$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssignedServiceAccountListFragment_assignedServiceAccounts">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "assignedServiceAccounts"
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
      "operation": require('./AssignedServiceAccountListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "AssignedServiceAccountListFragment_assignedServiceAccounts",
  "selections": [
    {
      "alias": "assignedServiceAccounts",
      "args": null,
      "concreteType": "ServiceAccountConnection",
      "kind": "LinkedField",
      "name": "__AssignedServiceAccountList_assignedServiceAccounts_connection",
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
                (v1/*: any*/),
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Runner",
  "abstractKey": null
};
})();

(node as any).hash = "a18c09925b68b6bcec4483d3c8cbd435";

export default node;
