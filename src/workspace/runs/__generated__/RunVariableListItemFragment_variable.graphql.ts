/**
 * @generated SignedSource<<1766d131611c1ded097f36a382077c14>>
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
  readonly sensitive: boolean;
  readonly value: string | null;
  readonly versionId: string | null;
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
      "name": "sensitive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "versionId",
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

(node as any).hash = "3c0c0d362359e22829912b6b5ab20a0a";

export default node;
