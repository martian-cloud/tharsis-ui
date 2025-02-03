/**
 * @generated SignedSource<<7362ee9f16d4f19cdbe1e04673e465f3>>
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
  readonly includedInTfConfig: boolean | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "includedInTfConfig",
      "storageKey": null
    }
  ],
  "type": "RunVariable",
  "abstractKey": null
};

(node as any).hash = "82bfe58d916b6ee2755d32b150083b94";

export default node;
