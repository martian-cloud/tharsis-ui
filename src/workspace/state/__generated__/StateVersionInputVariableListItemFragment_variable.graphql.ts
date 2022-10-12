/**
 * @generated SignedSource<<87725e452f1f5ef6db2d982173b73c63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionInputVariableListItemFragment_variable$data = {
  readonly hcl: boolean;
  readonly key: string;
  readonly namespacePath: string | null;
  readonly value: string | null;
  readonly " $fragmentType": "StateVersionInputVariableListItemFragment_variable";
};
export type StateVersionInputVariableListItemFragment_variable$key = {
  readonly " $data"?: StateVersionInputVariableListItemFragment_variable$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionInputVariableListItemFragment_variable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionInputVariableListItemFragment_variable",
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

(node as any).hash = "ccc7ccf8a7e0495727d825e7c1a117ee";

export default node;
