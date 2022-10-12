/**
 * @generated SignedSource<<0c685b29c3ae6e99382f69f3ba613c2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GPGKeyListItemFragment_key$data = {
  readonly createdBy: string;
  readonly fingerprint: string;
  readonly gpgKeyId: string;
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly " $fragmentType": "GPGKeyListItemFragment_key";
};
export type GPGKeyListItemFragment_key$key = {
  readonly " $data"?: GPGKeyListItemFragment_key$data;
  readonly " $fragmentSpreads": FragmentRefs<"GPGKeyListItemFragment_key">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GPGKeyListItemFragment_key",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ResourceMetadata",
      "kind": "LinkedField",
      "name": "metadata",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
      "name": "gpgKeyId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fingerprint",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdBy",
      "storageKey": null
    }
  ],
  "type": "GPGKey",
  "abstractKey": null
};

(node as any).hash = "3ccc7b8e291213e42a591e5e8bab7f09";

export default node;
