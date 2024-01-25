/**
 * @generated SignedSource<<e372f54266e1e55aa4245e823f1722c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountMenuFragment$data = {
  readonly me: {
    readonly admin?: boolean;
    readonly username?: string;
  } | null;
  readonly " $fragmentType": "AccountMenuFragment";
};
export type AccountMenuFragment$key = {
  readonly " $data"?: AccountMenuFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountMenuFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountMenuFragment",
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
              "name": "username",
              "storageKey": null
            },
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

(node as any).hash = "a31c25d900c804193acf52bd6debcc11";

export default node;
