/**
 * @generated SignedSource<<fea5cc8e2f2efa9e334dd7aafadfe1c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionListFragment_module$data = {
  readonly id: string;
  readonly " $fragmentType": "TerraformModuleVersionListFragment_module";
};
export type TerraformModuleVersionListFragment_module$key = {
  readonly " $data"?: TerraformModuleVersionListFragment_module$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionListFragment_module">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TerraformModuleVersionListFragment_module",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TerraformModule",
  "abstractKey": null
};

(node as any).hash = "064b28ebc49606f1cb0ff4dd8b56b4ec";

export default node;
