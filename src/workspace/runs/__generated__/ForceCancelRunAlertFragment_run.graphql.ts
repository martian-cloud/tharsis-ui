/**
 * @generated SignedSource<<06fd590abe5d9eca50c0483214e24818>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ForceCancelRunAlertFragment_run$data = {
  readonly forceCancelAvailableAt: any | null;
  readonly " $fragmentSpreads": FragmentRefs<"ForceCancelRunButtonFragment_run">;
  readonly " $fragmentType": "ForceCancelRunAlertFragment_run";
};
export type ForceCancelRunAlertFragment_run$key = {
  readonly " $data"?: ForceCancelRunAlertFragment_run$data;
  readonly " $fragmentSpreads": FragmentRefs<"ForceCancelRunAlertFragment_run">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ForceCancelRunAlertFragment_run",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "forceCancelAvailableAt",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ForceCancelRunButtonFragment_run"
    }
  ],
  "type": "Run",
  "abstractKey": null
};

(node as any).hash = "e77ef8cbec8faccd6c6e8d3cd213a035";

export default node;
