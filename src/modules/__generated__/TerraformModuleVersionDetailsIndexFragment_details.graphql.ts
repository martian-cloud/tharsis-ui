/**
 * @generated SignedSource<<45a2a73e2ba2c439d0596aaeec5cff6c>>
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
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionDetailsSidebarFragment_details">;
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
      "name": "TerraformModuleVersionDetailsSidebarFragment_details"
    }
  ],
  "type": "TerraformModuleVersion",
  "abstractKey": null
};
})();

(node as any).hash = "c1a92406ac6b4cf15fd05d30beea76d2";

export default node;
