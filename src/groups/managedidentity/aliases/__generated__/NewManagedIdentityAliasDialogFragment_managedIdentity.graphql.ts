/**
 * @generated SignedSource<<db70ee3a95cd9d1243eef148dbc2c389>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewManagedIdentityAliasDialogFragment_managedIdentity$data = {
  readonly id: string;
  readonly " $fragmentType": "NewManagedIdentityAliasDialogFragment_managedIdentity";
};
export type NewManagedIdentityAliasDialogFragment_managedIdentity$key = {
  readonly " $data"?: NewManagedIdentityAliasDialogFragment_managedIdentity$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewManagedIdentityAliasDialogFragment_managedIdentity">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewManagedIdentityAliasDialogFragment_managedIdentity",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "ManagedIdentity",
  "abstractKey": null
};

(node as any).hash = "d930ea080dcfdc97ceac402ea68a6c1a";

export default node;
