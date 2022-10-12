/**
 * @generated SignedSource<<d0b6150d022ca0b2f8f0767aaebce1be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionDetailsFragment_details$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "StateVersionDetailsFragment_details";
};
export type StateVersionDetailsFragment_details$key = {
  readonly " $data"?: StateVersionDetailsFragment_details$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionDetailsFragment_details">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionDetailsFragment_details",
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
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "cad001e63727a84c029f908d209f8207";

export default node;
