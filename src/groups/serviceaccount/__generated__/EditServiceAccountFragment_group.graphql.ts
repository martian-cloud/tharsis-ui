/**
 * @generated SignedSource<<0d8415f4cb0ac8e8cd4ac26a41a144ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditServiceAccountFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "EditServiceAccountFragment_group";
};
export type EditServiceAccountFragment_group$key = {
  readonly " $data"?: EditServiceAccountFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditServiceAccountFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditServiceAccountFragment_group",
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

(node as any).hash = "12eeae7eed06663166d66175015812aa";

export default node;
