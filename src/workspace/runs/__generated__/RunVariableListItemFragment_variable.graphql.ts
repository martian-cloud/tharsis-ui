/**
 * @generated SignedSource<<d4665843d59d8d7cffb1bd59fe4fdf56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type VariableCategory = "environment" | "terraform" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RunVariableListItemFragment_variable$data = {
  readonly category: VariableCategory;
  readonly hcl: boolean;
  readonly key: string;
  readonly namespacePath: string | null;
  readonly value: string | null;
  readonly " $fragmentType": "RunVariableListItemFragment_variable";
};
export type RunVariableListItemFragment_variable$key = {
  readonly " $data"?: RunVariableListItemFragment_variable$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunVariableListItemFragment_variable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunVariableListItemFragment_variable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hcl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "namespacePath",
      "storageKey": null
    }
  ],
  "type": "RunVariable",
  "abstractKey": null
};

(node as any).hash = "aef89f1ddf0300ccd6d65607b71bbf9c";

export default node;
