/**
 * @generated SignedSource<<bbf3e9397b48b0668985f747b5a4743a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AssignedManagedIdentityListFragment_assignedManagedIdentities$data = {
  readonly assignedManagedIdentities: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"AssignedManagedIdentityListItemFragment_managedIdentity">;
  }>;
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "AssignedManagedIdentityListFragment_assignedManagedIdentities";
};
export type AssignedManagedIdentityListFragment_assignedManagedIdentities$key = {
  readonly " $data"?: AssignedManagedIdentityListFragment_assignedManagedIdentities$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssignedManagedIdentityListFragment_assignedManagedIdentities">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssignedManagedIdentityListFragment_assignedManagedIdentities",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ManagedIdentity",
      "kind": "LinkedField",
      "name": "assignedManagedIdentities",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssignedManagedIdentityListItemFragment_managedIdentity"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};
})();

(node as any).hash = "29477c18cd26d95761297b1420dde2a0";

export default node;
