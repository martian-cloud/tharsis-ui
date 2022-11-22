/**
 * @generated SignedSource<<27313ba0638d09ff244b616e9291a8ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupAdvancedSettingsFragment_group$data = {
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"GroupAdvancedSettingsDeleteDialogFragment_group">;
  readonly " $fragmentType": "GroupAdvancedSettingsFragment_group";
};
export type GroupAdvancedSettingsFragment_group$key = {
  readonly " $data"?: GroupAdvancedSettingsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupAdvancedSettingsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupAdvancedSettingsFragment_group",
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
      "name": "GroupAdvancedSettingsDeleteDialogFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "ac6443c87f42560d0cdd6da67cc356b3";

export default node;
