/**
 * @generated SignedSource<<ebef72178af4a3704dd0a0c428cf5b2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagedIdentityListFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "ManagedIdentityListFragment_group";
};
export type ManagedIdentityListFragment_group$key = {
  readonly " $data"?: ManagedIdentityListFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityListFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ManagedIdentityListFragment_group",
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

(node as any).hash = "1cd26c564afceff2ccb627c9b4e541fc";

export default node;
