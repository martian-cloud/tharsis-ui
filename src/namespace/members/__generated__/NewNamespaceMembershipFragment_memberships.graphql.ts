/**
 * @generated SignedSource<<317bdca53b5bac1939bd57a1bf93ce26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewNamespaceMembershipFragment_memberships$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "NewNamespaceMembershipFragment_memberships";
};
export type NewNamespaceMembershipFragment_memberships$key = {
  readonly " $data"?: NewNamespaceMembershipFragment_memberships$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewNamespaceMembershipFragment_memberships">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewNamespaceMembershipFragment_memberships",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Namespace",
  "abstractKey": "__isNamespace"
};

(node as any).hash = "a4a92358613c9d9370c21e65eeb1b809";

export default node;
