/**
 * @generated SignedSource<<0692f18425aef59bcf517fbf3f8a3f92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionsFragment_stateVersions$data = {
  readonly fullPath: string;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionDetailsFragment_details">;
  readonly " $fragmentType": "StateVersionsFragment_stateVersions";
};
export type StateVersionsFragment_stateVersions$key = {
  readonly " $data"?: StateVersionsFragment_stateVersions$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionsFragment_stateVersions">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionsFragment_stateVersions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StateVersionDetailsFragment_details"
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "b9c3132a20a8ca4dbb732c8d60b9ed2d";

export default node;
