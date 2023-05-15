/**
 * @generated SignedSource<<7419aa18341737ea8d8b38474a450914>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MigrateGroupDialogFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "MigrateGroupDialogFragment_group";
};
export type MigrateGroupDialogFragment_group$key = {
  readonly " $data"?: MigrateGroupDialogFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"MigrateGroupDialogFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MigrateGroupDialogFragment_group",
  "selections": [
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

(node as any).hash = "96c373bd2144f222704eb18cc3e659a0";

export default node;
