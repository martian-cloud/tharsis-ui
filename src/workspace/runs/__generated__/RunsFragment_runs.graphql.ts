/**
 * @generated SignedSource<<1251015aaf968682a776da1f474aa05d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunsFragment_runs$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RunDetailsFragment_details">;
  readonly " $fragmentType": "RunsFragment_runs";
};
export type RunsFragment_runs$key = {
  readonly " $data"?: RunsFragment_runs$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunsFragment_runs">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunsFragment_runs",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunDetailsFragment_details"
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "1dc80ad325cca01792e7b8225bcbd95d";

export default node;
