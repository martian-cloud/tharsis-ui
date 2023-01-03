/**
 * @generated SignedSource<<1400b9e2359c13701a79b10e951c49b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupTreeContainerFragment_me$data = {
  readonly me: {
    readonly admin?: boolean;
  } | null;
  readonly " $fragmentType": "GroupTreeContainerFragment_me";
};
export type GroupTreeContainerFragment_me$key = {
  readonly " $data"?: GroupTreeContainerFragment_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupTreeContainerFragment_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupTreeContainerFragment_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "admin",
              "storageKey": null
            }
          ],
          "type": "User",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "9b2ec4ef3e8a368e1c21071091757c12";

export default node;
