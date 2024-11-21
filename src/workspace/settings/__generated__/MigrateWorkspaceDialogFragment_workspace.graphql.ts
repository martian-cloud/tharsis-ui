/**
 * @generated SignedSource<<6bde2daf8f52f03c63a093c6629d8762>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MigrateWorkspaceDialogFragment_workspace$data = {
  readonly fullPath: string;
  readonly groupPath: string;
  readonly name: string;
  readonly " $fragmentType": "MigrateWorkspaceDialogFragment_workspace";
};
export type MigrateWorkspaceDialogFragment_workspace$key = {
  readonly " $data"?: MigrateWorkspaceDialogFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"MigrateWorkspaceDialogFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MigrateWorkspaceDialogFragment_workspace",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "groupPath",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "185204e229fda2e913b5f0681f7004ca";

export default node;
