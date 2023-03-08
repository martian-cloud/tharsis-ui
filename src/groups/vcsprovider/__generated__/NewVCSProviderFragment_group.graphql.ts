/**
 * @generated SignedSource<<ff908326a17ac29292ede9eea4eeeaba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewVCSProviderFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "NewVCSProviderFragment_group";
};
export type NewVCSProviderFragment_group$key = {
  readonly " $data"?: NewVCSProviderFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewVCSProviderFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewVCSProviderFragment_group",
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
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "ed817109f96eeb8e736e73e2e0f65af0";

export default node;
