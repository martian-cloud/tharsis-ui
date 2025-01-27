/**
 * @generated SignedSource<<0441990ec9a6b2596cf662843b0bdabc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionInputVariableListItemFragment_variable$data = {
  readonly key: string;
  readonly namespacePath: string | null;
  readonly value: string | null;
  readonly " $fragmentType": "StateVersionInputVariableListItemFragment_variable";
};
export type StateVersionInputVariableListItemFragment_variable$key = {
  readonly " $data"?: StateVersionInputVariableListItemFragment_variable$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionInputVariableListItemFragment_variable">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionInputVariableListItemFragment_variable",
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
  "type": "RunVariable",
  "abstractKey": null
};

(node as any).hash = "ece28539bc4b1a6d8aa38ad8fe327ece";

export default node;
