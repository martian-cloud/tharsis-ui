/**
 * @generated SignedSource<<aaea19d33e1dc711c50c85b93c91e018>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupSettingsFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentSpreads": FragmentRefs<"GroupAdvancedSettingsFragment_group" | "GroupGeneralSettingsFragment_group" | "GroupRunnerSettingsFragment_group">;
  readonly " $fragmentType": "GroupSettingsFragment_group";
};
export type GroupSettingsFragment_group$key = {
  readonly " $data"?: GroupSettingsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupSettingsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupSettingsFragment_group",
  "selections": [
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
      "name": "GroupGeneralSettingsFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupAdvancedSettingsFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupRunnerSettingsFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "f5b45465d00d88f2ec0673c20b580b2a";

export default node;
