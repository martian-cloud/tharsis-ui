/**
 * @generated SignedSource<<1894e26d417e2c99d0d424130d3e883f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type VariableCategory = "environment" | "terraform" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InheritedVariableListItemFragment_variable$data = {
  readonly category: VariableCategory;
  readonly hcl: boolean;
  readonly id: string;
  readonly key: string;
  readonly namespacePath: string;
  readonly value: string | null;
  readonly " $fragmentType": "InheritedVariableListItemFragment_variable";
};
export type InheritedVariableListItemFragment_variable$key = {
  readonly " $data"?: InheritedVariableListItemFragment_variable$data;
  readonly " $fragmentSpreads": FragmentRefs<"InheritedVariableListItemFragment_variable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InheritedVariableListItemFragment_variable",
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
  "type": "NamespaceVariable",
  "abstractKey": null
};

(node as any).hash = "c4c4fe17bbe18a19d04511384a94c911";

export default node;
