/**
 * @generated SignedSource<<df6712dd6c3f84d68f0d97e48870543e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
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
