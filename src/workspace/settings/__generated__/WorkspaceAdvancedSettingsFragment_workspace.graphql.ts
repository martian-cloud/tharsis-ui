/**
 * @generated SignedSource<<2810f3f737f668cbb2872ed6fefeb37a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceAdvancedSettingsFragment_workspace$data = {
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceAdvancedSettingsDeleteDialogFragment_workspace">;
  readonly " $fragmentType": "WorkspaceAdvancedSettingsFragment_workspace";
};
export type WorkspaceAdvancedSettingsFragment_workspace$key = {
  readonly " $data"?: WorkspaceAdvancedSettingsFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceAdvancedSettingsFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceAdvancedSettingsFragment_workspace",
  "selections": [
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
      "name": "fullPath",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkspaceAdvancedSettingsDeleteDialogFragment_workspace"
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "c2d38e4b27ed72aaf41749861a4bd110";

export default node;
