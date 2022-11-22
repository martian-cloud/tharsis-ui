/**
 * @generated SignedSource<<62a59a72ad96f13a60b627fbdcd415af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupGeneralSettingsFragment_group$data = {
  readonly description: string;
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentType": "GroupGeneralSettingsFragment_group";
};
export type GroupGeneralSettingsFragment_group$key = {
  readonly " $data"?: GroupGeneralSettingsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupGeneralSettingsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupGeneralSettingsFragment_group",
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
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "962293c92c2c645695bd4956aa1b9556";

export default node;
