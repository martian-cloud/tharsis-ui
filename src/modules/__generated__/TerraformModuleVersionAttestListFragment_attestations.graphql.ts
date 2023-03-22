/**
 * @generated SignedSource<<ad43b44b0f7b70408b950ce362113668>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionAttestListFragment_attestations$data = {
  readonly attestations: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly data: string;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionAttestListItemFragment_module">;
      } | null;
    } | null> | null;
  };
  readonly id: string;
  readonly " $fragmentType": "TerraformModuleVersionAttestListFragment_attestations";
};
export type TerraformModuleVersionAttestListFragment_attestations$key = {
  readonly " $data"?: TerraformModuleVersionAttestListFragment_attestations$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionAttestListFragment_attestations">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "attestations"
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
      "operation": require('./TerraformModuleVersionAttestListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "TerraformModuleVersionAttestListFragment_attestations",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "attestations",
      "args": null,
      "concreteType": "TerraformModuleAttestationConnection",
      "kind": "LinkedField",
      "name": "__TerraformModuleVersionAttestList_attestations_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TerraformModuleAttestationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TerraformModuleAttestation",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "data",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TerraformModuleVersionAttestListItemFragment_module"
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
    }
  ],
  "type": "TerraformModuleVersion",
  "abstractKey": null
};
})();

(node as any).hash = "0642f53265933eb3763b69621c892c14";

export default node;
