/**
 * @generated SignedSource<<db8ea43b85d0008236a3a9e095b816b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NamespaceMembershipsIndexFragment_memberships$data = {
  readonly fullPath: string;
  readonly " $fragmentSpreads": FragmentRefs<"NamespaceMembershipListFragment_memberships">;
  readonly " $fragmentType": "NamespaceMembershipsIndexFragment_memberships";
};
export type NamespaceMembershipsIndexFragment_memberships$key = {
  readonly " $data"?: NamespaceMembershipsIndexFragment_memberships$data;
  readonly " $fragmentSpreads": FragmentRefs<"NamespaceMembershipsIndexFragment_memberships">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NamespaceMembershipsIndexFragment_memberships",
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
      "name": "NamespaceMembershipListFragment_memberships"
    }
  ],
  "type": "Namespace",
  "abstractKey": "__isNamespace"
};

(node as any).hash = "0bfe38964e9d5f9c2e26b6b4348e46b2";

export default node;
