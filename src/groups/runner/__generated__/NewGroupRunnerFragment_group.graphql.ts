/**
 * @generated SignedSource<<d05c5a4a257ffa89968a7318300775d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewGroupRunnerFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "NewGroupRunnerFragment_group";
};
export type NewGroupRunnerFragment_group$key = {
  readonly " $data"?: NewGroupRunnerFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewGroupRunnerFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewGroupRunnerFragment_group",
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

(node as any).hash = "4ef850e2c56b13a65baca8fa2185d7e6";

export default node;
