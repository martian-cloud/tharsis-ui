/**
 * @generated SignedSource<<c3c137a06a9c93285c280d739a4800f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceAdvancedSettingsDeleteDialogFragment_workspace$data = {
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentType": "WorkspaceAdvancedSettingsDeleteDialogFragment_workspace";
};
export type WorkspaceAdvancedSettingsDeleteDialogFragment_workspace$key = {
  readonly " $data"?: WorkspaceAdvancedSettingsDeleteDialogFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceAdvancedSettingsDeleteDialogFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceAdvancedSettingsDeleteDialogFragment_workspace",
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

(node as any).hash = "a2b9431e628bda6f60579ea2e9487fdc";

export default node;
