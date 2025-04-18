/**
 * @generated SignedSource<<f4ec68f5b650d4c8f6f51d7e48becb8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VCSProviderListFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "VCSProviderListFragment_group";
};
export type VCSProviderListFragment_group$key = {
  readonly " $data"?: VCSProviderListFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"VCSProviderListFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VCSProviderListFragment_group",
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

(node as any).hash = "e0119fdedfcf1e610bd6b8b7060f7eaa";

export default node;
