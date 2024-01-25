/**
 * @generated SignedSource<<ae3bf0dfda0d81022c9951d4953afe3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupRunnerDetailsFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "GroupRunnerDetailsFragment_group";
};
export type GroupRunnerDetailsFragment_group$key = {
  readonly " $data"?: GroupRunnerDetailsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupRunnerDetailsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupRunnerDetailsFragment_group",
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

(node as any).hash = "fe75ca52a9f64e4d3270a0326018a2b0";

export default node;
