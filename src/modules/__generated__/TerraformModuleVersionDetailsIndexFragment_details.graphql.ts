/**
 * @generated SignedSource<<3e258de19a98be3c23445f648db54cc9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionDetailsIndexFragment_details$data = {
  readonly id: string;
  readonly module: {
    readonly id: string;
    readonly name: string;
    readonly private: boolean;
    readonly registryNamespace: string;
    readonly source: string;
    readonly system: string;
    readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionListFragment_module">;
  };
  readonly status: string;
  readonly version: string;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionAttestListFragment_attestations" | "TerraformModuleVersionDetailsSidebarFragment_details">;
  readonly " $fragmentType": "TerraformModuleVersionDetailsIndexFragment_details";
};
export type TerraformModuleVersionDetailsIndexFragment_details$key = {
  readonly " $data"?: TerraformModuleVersionDetailsIndexFragment_details$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionDetailsIndexFragment_details">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TerraformModuleVersionDetailsIndexFragment_details",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "version",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TerraformModule",
      "kind": "LinkedField",
      "name": "module",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "name": "source",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "system",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "registryNamespace",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "private",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TerraformModuleVersionListFragment_module"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TerraformModuleVersionAttestListFragment_attestations"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TerraformModuleVersionDetailsSidebarFragment_details"
    }
  ],
  "type": "TerraformModuleVersion",
  "abstractKey": null
};
})();

(node as any).hash = "30b05728c47e49e4ad6c2559f257199a";

export default node;
