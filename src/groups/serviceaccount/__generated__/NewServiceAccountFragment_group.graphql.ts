/**
 * @generated SignedSource<<05ecd874994616eb5d85a88349f55c26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewServiceAccountFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "NewServiceAccountFragment_group";
};
export type NewServiceAccountFragment_group$key = {
  readonly " $data"?: NewServiceAccountFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewServiceAccountFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewServiceAccountFragment_group",
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

(node as any).hash = "1beead147e294cae9600dae863e321f2";

export default node;
