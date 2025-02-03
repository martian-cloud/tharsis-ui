/**
 * @generated SignedSource<<5c9d6ffb8560f2bce89629134642a14b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type VariableCategory = "environment" | "terraform" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type StateVersionInputVariablesFragment_variables$data = {
  readonly variables: ReadonlyArray<{
    readonly category: VariableCategory;
    readonly includedInTfConfig: boolean | null;
    readonly key: string;
    readonly namespacePath: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"StateVersionInputVariableListItemFragment_variable">;
  }>;
  readonly " $fragmentType": "StateVersionInputVariablesFragment_variables";
};
export type StateVersionInputVariablesFragment_variables$key = {
  readonly " $data"?: StateVersionInputVariablesFragment_variables$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionInputVariablesFragment_variables">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionInputVariablesFragment_variables",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RunVariable",
      "kind": "LinkedField",
      "name": "variables",
      "plural": true,
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
          "name": "namespacePath",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "includedInTfConfig",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StateVersionInputVariableListItemFragment_variable"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Run",
  "abstractKey": null
};

(node as any).hash = "38a5b2156b290a0dd75bc263b9c4d70a";

export default node;
