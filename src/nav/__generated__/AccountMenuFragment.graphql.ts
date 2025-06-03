/**
 * @generated SignedSource<<1631e35572ab1ba42e0ee54e41e7856c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountMenuFragment$data = {
  readonly me: {
    readonly admin?: boolean;
    readonly username?: string;
  } | null | undefined;
  readonly version: {
    readonly apiBuildTimestamp: any;
    readonly apiVersion: string;
    readonly dbMigrationDirty: boolean;
    readonly dbMigrationVersion: string;
  };
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Version",
      "kind": "LinkedField",
      "name": "version",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "apiVersion",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dbMigrationVersion",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dbMigrationDirty",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "apiBuildTimestamp",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "7c51969cf574cb2b4868a1f816086bf2";

export default node;
