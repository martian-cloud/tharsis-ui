/**
 * @generated SignedSource<<9e19ad455235f3e0a07547d82bec1845>>
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

(node as any).hash = "05911e0381ebdd720aa55ca91e3043f2";

export default node;
