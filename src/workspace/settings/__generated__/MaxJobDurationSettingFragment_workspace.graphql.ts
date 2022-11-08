/**
 * @generated SignedSource<<3fa7a95ddf0341d5ab7b3f9fd6a6a5b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaxJobDurationSettingFragment_workspace$data = {
  readonly fullPath: string;
  readonly maxJobDuration: number;
  readonly " $fragmentType": "MaxJobDurationSettingFragment_workspace";
};
export type MaxJobDurationSettingFragment_workspace$key = {
  readonly " $data"?: MaxJobDurationSettingFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"MaxJobDurationSettingFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MaxJobDurationSettingFragment_workspace",
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
      "name": "maxJobDuration",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "a82dd91fc6c780272fe5de38cc26d216";

export default node;
