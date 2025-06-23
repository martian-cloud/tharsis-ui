/**
 * @generated SignedSource<<6f8a0030bd957d794b9b1c149710ce15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FederatedRegistryListFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "FederatedRegistryListFragment_group";
};
export type FederatedRegistryListFragment_group$key = {
  readonly " $data"?: FederatedRegistryListFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"FederatedRegistryListFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FederatedRegistryListFragment_group",
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

(node as any).hash = "a868afe741509c703a674134d60ff4e1";

export default node;
