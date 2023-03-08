/**
 * @generated SignedSource<<5f0d22b291c0e24570674dfbbfe466e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditVCSProviderOAuthCredentialsFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "EditVCSProviderOAuthCredentialsFragment_group";
};
export type EditVCSProviderOAuthCredentialsFragment_group$key = {
  readonly " $data"?: EditVCSProviderOAuthCredentialsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditVCSProviderOAuthCredentialsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditVCSProviderOAuthCredentialsFragment_group",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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

(node as any).hash = "0215437b3d7455f2568b9abb257c862d";

export default node;
