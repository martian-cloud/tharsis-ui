/**
 * @generated SignedSource<<d0178bc125dd56f7b87dab0177d7b75d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NamespaceActivityFragment_activity$data = {
  readonly __typename: string;
  readonly fullPath: string;
  readonly " $fragmentType": "NamespaceActivityFragment_activity";
};
export type NamespaceActivityFragment_activity$key = {
  readonly " $data"?: NamespaceActivityFragment_activity$data;
  readonly " $fragmentSpreads": FragmentRefs<"NamespaceActivityFragment_activity">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NamespaceActivityFragment_activity",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Namespace",
  "abstractKey": "__isNamespace"
};

(node as any).hash = "b38fa0ac545c178f47a7fbe831a836c7";

export default node;
