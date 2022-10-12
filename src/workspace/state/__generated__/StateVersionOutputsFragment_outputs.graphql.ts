/**
 * @generated SignedSource<<4841f25dd3ae9a5da83135cb827ba5ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionOutputsFragment_outputs$data = {
  readonly outputs: ReadonlyArray<{
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"StateVersionOutputListItemFragment_output">;
  }>;
  readonly " $fragmentType": "StateVersionOutputsFragment_outputs";
};
export type StateVersionOutputsFragment_outputs$key = {
  readonly " $data"?: StateVersionOutputsFragment_outputs$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionOutputsFragment_outputs">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionOutputsFragment_outputs",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "StateVersionOutput",
      "kind": "LinkedField",
      "name": "outputs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StateVersionOutputListItemFragment_output"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StateVersion",
  "abstractKey": null
};

(node as any).hash = "1699456327cdc1c03177fa4d124dc2f5";

export default node;
