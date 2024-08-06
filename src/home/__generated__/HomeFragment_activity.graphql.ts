/**
 * @generated SignedSource<<68bc7673e7ae4c7506905c77fb0fae43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeFragment_activity$data = {
  readonly activityEvents: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "HomeFragment_activity";
};
export type HomeFragment_activity$key = {
  readonly " $data"?: HomeFragment_activity$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeFragment_activity">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeFragment_activity",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        }
      ],
      "concreteType": "ActivityEventConnection",
      "kind": "LinkedField",
      "name": "activityEvents",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "activityEvents(first:0)"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "3a5ce937f91e25bab888c9281f890615";

export default node;
