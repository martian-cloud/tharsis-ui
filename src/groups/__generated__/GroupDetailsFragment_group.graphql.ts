/**
 * @generated SignedSource<<7dae662e98843f76f04212bc8f2ef5eb>>
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
  readonly " $fragmentSpreads": FragmentRefs<"EditGroupFragment_group" | "GPGKeysFragment_group" | "GroupDetailsIndexFragment_group" | "GroupSettingsFragment_group" | "ManagedIdentitiesFragment_group" | "NamespaceActivityFragment_activity" | "NamespaceMembershipsFragment_memberships" | "RunnersFragment_group" | "ServiceAccountsFragment_group" | "VCSProvidersFragment_group" | "VariablesFragment_variables">;
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
      "name": "RunnersFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ServiceAccountsFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VCSProvidersFragment_group"
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupSettingsFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "ee7508cbbe7d32180ae2c2a62ab2c8aa";

export default node;
