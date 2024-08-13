/**
 * @generated SignedSource<<00e311560707551fb1c5adcc2324bb0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AdminAreaUserListItemFragment_user$data = {
  readonly active: boolean;
  readonly admin: boolean;
  readonly email: string;
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly scimExternalId: string | null;
  readonly username: string;
  readonly " $fragmentType": "AdminAreaUserListItemFragment_user";
};
export type AdminAreaUserListItemFragment_user$key = {
  readonly " $data"?: AdminAreaUserListItemFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"AdminAreaUserListItemFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AdminAreaUserListItemFragment_user",
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
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "admin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "active",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scimExternalId",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "39af1124b4f023536cef0379ac6e5cdd";

export default node;
