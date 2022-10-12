/**
 * @generated SignedSource<<e4b06614f62911b84618f14e52bc8f47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ServiceAccountDetailsFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "ServiceAccountDetailsFragment_group";
};
export type ServiceAccountDetailsFragment_group$key = {
  readonly " $data"?: ServiceAccountDetailsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"ServiceAccountDetailsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServiceAccountDetailsFragment_group",
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

(node as any).hash = "724ac76a05e7e9c5d3063e07e2c30d0a";

export default node;
