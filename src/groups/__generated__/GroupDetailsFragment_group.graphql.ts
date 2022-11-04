/**
 * @generated SignedSource<<a7450096a59e3b30e097016fc07c4c6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupDetailsFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"EditGroupFragment_group" | "GPGKeysFragment_group" | "GroupDetailsIndexFragment_group" | "ManagedIdentitiesFragment_group" | "NamespaceActivityFragment_activity" | "NamespaceMembershipsFragment_memberships" | "ServiceAccountsFragment_group" | "VariablesFragment_variables">;
  readonly " $fragmentType": "GroupDetailsFragment_group";
};
export type GroupDetailsFragment_group$key = {
  readonly " $data"?: GroupDetailsFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupDetailsFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupDetailsFragment_group",
  "selections": [
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
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupDetailsIndexFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ManagedIdentitiesFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ServiceAccountsFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VariablesFragment_variables"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NamespaceMembershipsFragment_memberships"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditGroupFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GPGKeysFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NamespaceActivityFragment_activity"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "13e9ef9f26416eb2e459799969ae28ff";

export default node;
