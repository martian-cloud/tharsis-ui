/**
 * @generated SignedSource<<560ce6de91a4516047e44e1221759de5>>
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
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "b85a4663d597f4a9141f5325856203bb";

export default node;
