/**
 * @generated SignedSource<<4e75acfe6c0b7e8c707a26ba9de2f9b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type VariableCategory = "environment" | "terraform" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RunVariablesFragment_variables$data = {
  readonly variables: ReadonlyArray<{
    readonly category: VariableCategory;
    readonly includedInTfConfig: boolean | null;
    readonly key: string;
    readonly namespacePath: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"RunVariableListItemFragment_variable">;
  }>;
  readonly " $fragmentType": "RunVariablesFragment_variables";
};
export type RunVariablesFragment_variables$key = {
  readonly " $data"?: RunVariablesFragment_variables$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunVariablesFragment_variables">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunVariablesFragment_variables",
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
          "name": "RunVariableListItemFragment_variable"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Run",
  "abstractKey": null
};

(node as any).hash = "a04f19ed7c72d13cc502e1317e745636";

export default node;
