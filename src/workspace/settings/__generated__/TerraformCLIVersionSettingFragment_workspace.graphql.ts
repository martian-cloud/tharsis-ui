/**
 * @generated SignedSource<<3386ad09b24a769763f708d4c0fbfc76>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformCLIVersionSettingFragment_workspace$data = {
  readonly fullPath: string;
  readonly terraformVersion: string;
  readonly " $fragmentType": "TerraformCLIVersionSettingFragment_workspace";
};
export type TerraformCLIVersionSettingFragment_workspace$key = {
  readonly " $data"?: TerraformCLIVersionSettingFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformCLIVersionSettingFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TerraformCLIVersionSettingFragment_workspace",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "terraformVersion",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "96b20e37d05c385ee05a8dc4775f06e3";

export default node;
