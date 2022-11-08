/**
 * @generated SignedSource<<e5debd9b3652c134f2804fa9ba408099>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceSettingsFragment_workspace$data = {
  readonly description: string;
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"MaxJobDurationSettingFragment_workspace" | "TerraformCLIVersionSettingFragment_workspace" | "WorkspaceGeneralSettingsFragment_workspace">;
  readonly " $fragmentType": "WorkspaceSettingsFragment_workspace";
};
export type WorkspaceSettingsFragment_workspace$key = {
  readonly " $data"?: WorkspaceSettingsFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceSettingsFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceSettingsFragment_workspace",
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
      "name": "description",
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
      "name": "MaxJobDurationSettingFragment_workspace"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TerraformCLIVersionSettingFragment_workspace"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkspaceGeneralSettingsFragment_workspace"
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "f6f468598a6037f8b7763e05efd4f63f";

export default node;
