/**
 * @generated SignedSource<<1cd09c581ee054a24a21d54961898286>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceDetailsFragment_workspace$data = {
  readonly description: string;
  readonly fullPath: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"AssignedManagedIdentityListFragment_assignedManagedIdentities" | "EditWorkspaceFragment_group" | "NamespaceActivityFragment_activity" | "NamespaceMembershipsFragment_memberships" | "RunsFragment_runs" | "StateVersionsFragment_stateVersions" | "VariablesFragment_variables" | "WorkspaceDetailsIndexFragment_workspace">;
  readonly " $fragmentType": "WorkspaceDetailsFragment_workspace";
};
export type WorkspaceDetailsFragment_workspace$key = {
  readonly " $data"?: WorkspaceDetailsFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceDetailsFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceDetailsFragment_workspace",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkspaceDetailsIndexFragment_workspace"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssignedManagedIdentityListFragment_assignedManagedIdentities"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunsFragment_runs"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StateVersionsFragment_stateVersions"
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
      "name": "EditWorkspaceFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NamespaceActivityFragment_activity"
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "f4da51d6fc58b870ad7e6b4df3bd0816";

export default node;
