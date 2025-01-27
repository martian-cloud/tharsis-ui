/**
 * @generated SignedSource<<b229d21315a3f47ff146806011f53bb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type VariableCategory = "environment" | "terraform" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type VariableListItemFragment_variable$data = {
  readonly category: VariableCategory;
  readonly id: string;
  readonly key: string;
  readonly metadata: {
    readonly updatedAt: any;
  };
  readonly namespacePath: string;
  readonly value: string | null;
  readonly " $fragmentType": "VariableListItemFragment_variable";
};
export type VariableListItemFragment_variable$key = {
  readonly " $data"?: VariableListItemFragment_variable$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariableListItemFragment_variable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VariableListItemFragment_variable",
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
      "concreteType": "ResourceMetadata",
      "kind": "LinkedField",
      "name": "metadata",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NamespaceVariable",
  "abstractKey": null
};

(node as any).hash = "1fa5bbf8e642eca8236d7c0c874d3bdd";

export default node;
