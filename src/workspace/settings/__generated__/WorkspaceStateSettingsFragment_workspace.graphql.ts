/**
 * @generated SignedSource<<7f1615d82b1ff58052c989aa6785a8aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceStateSettingsFragment_workspace$data = {
  readonly fullPath: string;
  readonly locked: boolean;
  readonly " $fragmentType": "WorkspaceStateSettingsFragment_workspace";
};
export type WorkspaceStateSettingsFragment_workspace$key = {
  readonly " $data"?: WorkspaceStateSettingsFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceStateSettingsFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceStateSettingsFragment_workspace",
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
      "name": "locked",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "669c1b758fae4b570b15ec67cabf1524";

export default node;
