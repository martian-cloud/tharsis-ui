/**
 * @generated SignedSource<<b828a29c7e9cfd3ec5e8e47ff5e98332>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupOrWorkspaceRendererQuery$variables = {
  fullPath: string;
};
export type GroupOrWorkspaceRendererQuery$data = {
  readonly namespace: {
    readonly __typename: string;
    readonly fullPath: string;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"GroupDetailsFragment_group" | "WorkspaceDetailsFragment_workspace">;
  } | null;
};
export type GroupOrWorkspaceRendererQuery = {
  response: GroupOrWorkspaceRendererQuery$data;
  variables: GroupOrWorkspaceRendererQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fullPath"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "fullPath",
    "variableName": "fullPath"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullPath",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v8 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hcl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespacePath",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "ResourceMetadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v14/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourcePath",
  "storageKey": null
},
v17 = [
  (v3/*: any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "ResourceMetadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v18/*: any*/),
    (v14/*: any*/)
  ],
  "storageKey": null
},
v20 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "NamespaceVariable",
      "kind": "LinkedField",
      "name": "variables",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        (v9/*: any*/),
        (v10/*: any*/),
        (v11/*: any*/),
        (v12/*: any*/),
        (v13/*: any*/),
        (v15/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "NamespaceMembership",
      "kind": "LinkedField",
      "name": "memberships",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "member",
          "plural": false,
          "selections": [
            (v2/*: any*/),
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
                  "name": "email",
                  "storageKey": null
                },
                (v3/*: any*/)
              ],
              "type": "User",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v5/*: any*/),
                (v3/*: any*/)
              ],
              "type": "Team",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v16/*: any*/),
                (v5/*: any*/),
                (v3/*: any*/)
              ],
              "type": "ServiceAccount",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v17/*: any*/),
              "type": "Node",
              "abstractKey": "__isNode"
            }
          ],
          "storageKey": null
        },
        (v19/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
        (v16/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Namespace",
  "abstractKey": "__isNamespace"
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdBy",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDestroy",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "moduleSource",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "moduleVersion",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "concreteType": "ResourceMetadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v18/*: any*/)
  ],
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "concreteType": "ConfigurationVersion",
  "kind": "LinkedField",
  "name": "configurationVersion",
  "plural": false,
  "selections": (v17/*: any*/),
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "Plan",
  "kind": "LinkedField",
  "name": "plan",
  "plural": false,
  "selections": [
    (v22/*: any*/),
    (v27/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "Apply",
  "kind": "LinkedField",
  "name": "apply",
  "plural": false,
  "selections": [
    (v22/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "triggeredBy",
      "storageKey": null
    },
    (v19/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupOrWorkspaceRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GroupDetailsFragment_group"
              }
            ],
            "type": "Group",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "WorkspaceDetailsFragment_workspace"
              }
            ],
            "type": "Workspace",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GroupOrWorkspaceRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "namespace",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
                "concreteType": "WorkspaceConnection",
                "kind": "LinkedField",
                "name": "workspaces",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": "workspaces(first:0)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "concreteType": "GroupConnection",
                "kind": "LinkedField",
                "name": "descendentGroups",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": "descendentGroups(first:0)"
              },
              (v20/*: any*/)
            ],
            "type": "Group",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "currentJob",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v21/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Run",
                    "kind": "LinkedField",
                    "name": "run",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "StateVersion",
                "kind": "LinkedField",
                "name": "currentStateVersion",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StateVersionOutput",
                    "kind": "LinkedField",
                    "name": "outputs",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      (v12/*: any*/),
                      (v21/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "sensitive",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StateVersionResource",
                    "kind": "LinkedField",
                    "name": "resources",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "provider",
                        "storageKey": null
                      },
                      (v21/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mode",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "module",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StateVersionDependency",
                    "kind": "LinkedField",
                    "name": "dependencies",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "workspacePath",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StateVersion",
                        "kind": "LinkedField",
                        "name": "stateVersion",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v15/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Workspace",
                        "kind": "LinkedField",
                        "name": "workspace",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "StateVersion",
                            "kind": "LinkedField",
                            "name": "currentStateVersion",
                            "plural": false,
                            "selections": (v17/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "data",
                    "storageKey": null
                  },
                  (v27/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Run",
                    "kind": "LinkedField",
                    "name": "run",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RunVariable",
                        "kind": "LinkedField",
                        "name": "variables",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v13/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
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
                  (v3/*: any*/),
                  (v15/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v21/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxJobDuration",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "terraformVersion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "preventDestroyPlan",
                "storageKey": null
              },
              (v20/*: any*/)
            ],
            "type": "Workspace",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c62ef2d25ab282fb915f3cb867d6f502",
    "id": null,
    "metadata": {},
    "name": "GroupOrWorkspaceRendererQuery",
    "operationKind": "query",
    "text": "query GroupOrWorkspaceRendererQuery(\n  $fullPath: String!\n) {\n  namespace(fullPath: $fullPath) {\n    __typename\n    id\n    fullPath\n    ... on Group {\n      ...GroupDetailsFragment_group\n    }\n    ... on Workspace {\n      ...WorkspaceDetailsFragment_workspace\n    }\n  }\n}\n\nfragment AssignedManagedIdentityListFragment_assignedManagedIdentities on Workspace {\n  id\n  fullPath\n  assignedManagedIdentities {\n    id\n    ...AssignedManagedIdentityListItemFragment_managedIdentity\n  }\n}\n\nfragment AssignedManagedIdentityListItemFragment_managedIdentity on ManagedIdentity {\n  metadata {\n    updatedAt\n  }\n  id\n  name\n  description\n  type\n  resourcePath\n}\n\nfragment EditGroupFragment_group on Group {\n  id\n  name\n  description\n  fullPath\n}\n\nfragment EditManagedIdentityFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment EditServiceAccountFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment GPGKeyListFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment GPGKeysFragment_group on Group {\n  ...GPGKeyListFragment_group\n  ...NewGPGKeyFragment_group\n}\n\nfragment GroupDetailsFragment_group on Group {\n  id\n  fullPath\n  name\n  ...GroupDetailsIndexFragment_group\n  ...ManagedIdentitiesFragment_group\n  ...ServiceAccountsFragment_group\n  ...VariablesFragment_variables\n  ...NamespaceMembershipsFragment_memberships\n  ...EditGroupFragment_group\n  ...GPGKeysFragment_group\n  ...NamespaceActivityFragment_activity\n}\n\nfragment GroupDetailsIndexFragment_group on Group {\n  name\n  description\n  fullPath\n  workspaces(first: 0) {\n    totalCount\n  }\n  descendentGroups(first: 0) {\n    totalCount\n  }\n}\n\nfragment ManagedIdentitiesFragment_group on Group {\n  ...ManagedIdentityListFragment_group\n  ...NewManagedIdentityFragment_group\n  ...EditManagedIdentityFragment_group\n  ...ManagedIdentityDetailsFragment_group\n}\n\nfragment ManagedIdentityDetailsFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment ManagedIdentityListFragment_group on Group {\n  fullPath\n}\n\nfragment MaxJobDurationSettingFragment_workspace on Workspace {\n  maxJobDuration\n}\n\nfragment NamespaceActivityFragment_activity on Namespace {\n  __isNamespace: __typename\n  __typename\n  fullPath\n}\n\nfragment NamespaceMembershipListFragment_memberships on Namespace {\n  __isNamespace: __typename\n  fullPath\n  memberships {\n    id\n    member {\n      __typename\n      ... on User {\n        username\n        email\n      }\n      ... on Team {\n        name\n      }\n      ... on ServiceAccount {\n        resourcePath\n        name\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    ...NamespaceMembershipListItemFragment_membership\n  }\n}\n\nfragment NamespaceMembershipListItemFragment_membership on NamespaceMembership {\n  metadata {\n    createdAt\n    updatedAt\n  }\n  id\n  role\n  resourcePath\n  member {\n    __typename\n    ... on User {\n      id\n      username\n      email\n    }\n    ... on Team {\n      id\n      name\n    }\n    ... on ServiceAccount {\n      id\n      name\n      resourcePath\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment NamespaceMembershipsFragment_memberships on Namespace {\n  __isNamespace: __typename\n  ...NamespaceMembershipsIndexFragment_memberships\n  ...NewNamespaceMembershipFragment_memberships\n}\n\nfragment NamespaceMembershipsIndexFragment_memberships on Namespace {\n  __isNamespace: __typename\n  fullPath\n  ...NamespaceMembershipListFragment_memberships\n}\n\nfragment NewGPGKeyFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment NewManagedIdentityFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment NewNamespaceMembershipFragment_memberships on Namespace {\n  __isNamespace: __typename\n  fullPath\n}\n\nfragment NewServiceAccountFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment RunDetailsFragment_details on Workspace {\n  id\n  fullPath\n}\n\nfragment RunsFragment_runs on Workspace {\n  id\n  fullPath\n  ...RunDetailsFragment_details\n}\n\nfragment ServiceAccountDetailsFragment_group on Group {\n  id\n  fullPath\n}\n\nfragment ServiceAccountListFragment_group on Group {\n  fullPath\n}\n\nfragment ServiceAccountsFragment_group on Group {\n  ...ServiceAccountListFragment_group\n  ...ServiceAccountDetailsFragment_group\n  ...NewServiceAccountFragment_group\n  ...EditServiceAccountFragment_group\n}\n\nfragment StateVersionDependenciesFragment_dependencies on StateVersion {\n  dependencies {\n    workspacePath\n    ...StateVersionDependencyListItemFragment_dependency\n  }\n}\n\nfragment StateVersionDependencyListItemFragment_dependency on StateVersionDependency {\n  workspacePath\n  stateVersion {\n    id\n    metadata {\n      updatedAt\n    }\n  }\n  workspace {\n    id\n    currentStateVersion {\n      id\n    }\n  }\n}\n\nfragment StateVersionDetailsFragment_details on Workspace {\n  id\n  fullPath\n}\n\nfragment StateVersionInputVariableListItemFragment_variable on RunVariable {\n  key\n  hcl\n  value\n  namespacePath\n}\n\nfragment StateVersionInputVariablesFragment_variables on Run {\n  variables {\n    key\n    category\n    namespacePath\n    ...StateVersionInputVariableListItemFragment_variable\n  }\n}\n\nfragment StateVersionOutputListItemFragment_output on StateVersionOutput {\n  name\n  value\n  type\n  sensitive\n}\n\nfragment StateVersionOutputsFragment_outputs on StateVersion {\n  outputs {\n    name\n    ...StateVersionOutputListItemFragment_output\n    id\n  }\n}\n\nfragment StateVersionResourceListItemFragment_resource on StateVersionResource {\n  name\n  type\n  provider\n  mode\n  module\n}\n\nfragment StateVersionResourcesFragment_resources on StateVersion {\n  resources {\n    name\n    provider\n    type\n    ...StateVersionResourceListItemFragment_resource\n  }\n}\n\nfragment StateVersionsFragment_stateVersions on Workspace {\n  fullPath\n  ...StateVersionDetailsFragment_details\n}\n\nfragment VariableListItemFragment_variable on NamespaceVariable {\n  id\n  key\n  category\n  hcl\n  value\n  namespacePath\n  metadata {\n    updatedAt\n  }\n}\n\nfragment VariablesFragment_variables on Namespace {\n  __isNamespace: __typename\n  id\n  fullPath\n  variables {\n    id\n    key\n    category\n    ...VariableListItemFragment_variable\n  }\n}\n\nfragment WorkspaceAdvancedSettingsDeleteDialogFragment_workspace on Workspace {\n  name\n  fullPath\n}\n\nfragment WorkspaceAdvancedSettingsFragment_workspace on Workspace {\n  name\n  fullPath\n  ...WorkspaceAdvancedSettingsDeleteDialogFragment_workspace\n}\n\nfragment WorkspaceDetailsCurrentJobFragment_workspace on Workspace {\n  id\n  fullPath\n  currentJob {\n    id\n    type\n    run {\n      id\n      status\n      createdBy\n      isDestroy\n      moduleSource\n      moduleVersion\n      metadata {\n        createdAt\n      }\n      configurationVersion {\n        id\n      }\n      plan {\n        status\n        metadata {\n          createdAt\n        }\n        id\n      }\n      apply {\n        status\n        triggeredBy\n        metadata {\n          createdAt\n          updatedAt\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment WorkspaceDetailsEmptyFragment_workspace on Workspace {\n  id\n  fullPath\n}\n\nfragment WorkspaceDetailsFragment_workspace on Workspace {\n  id\n  name\n  description\n  fullPath\n  ...WorkspaceDetailsIndexFragment_workspace\n  ...AssignedManagedIdentityListFragment_assignedManagedIdentities\n  ...RunsFragment_runs\n  ...StateVersionsFragment_stateVersions\n  ...VariablesFragment_variables\n  ...NamespaceMembershipsFragment_memberships\n  ...WorkspaceSettingsFragment_workspace\n  ...NamespaceActivityFragment_activity\n}\n\nfragment WorkspaceDetailsIndexFragment_workspace on Workspace {\n  id\n  name\n  description\n  fullPath\n  ...WorkspaceDetailsEmptyFragment_workspace\n  ...WorkspaceDetailsCurrentJobFragment_workspace\n  currentJob {\n    id\n  }\n  currentStateVersion {\n    id\n    ...StateVersionOutputsFragment_outputs\n    ...StateVersionResourcesFragment_resources\n    ...StateVersionDependenciesFragment_dependencies\n    ...WorkspaceDetailsStateFileFragment_stateVersion\n    metadata {\n      createdAt\n    }\n    run {\n      ...StateVersionInputVariablesFragment_variables\n      id\n      status\n      createdBy\n      isDestroy\n      moduleSource\n      moduleVersion\n      metadata {\n        createdAt\n      }\n      configurationVersion {\n        id\n      }\n      plan {\n        status\n        metadata {\n          createdAt\n        }\n        id\n      }\n      apply {\n        status\n        triggeredBy\n        metadata {\n          createdAt\n          updatedAt\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment WorkspaceDetailsStateFileFragment_stateVersion on StateVersion {\n  id\n  data\n}\n\nfragment WorkspaceGeneralSettingsFragment_workspace on Workspace {\n  name\n  description\n  fullPath\n}\n\nfragment WorkspaceRunSettingsFragment_workspace on Workspace {\n  name\n  description\n  fullPath\n  maxJobDuration\n  terraformVersion\n  preventDestroyPlan\n  ...MaxJobDurationSettingFragment_workspace\n}\n\nfragment WorkspaceSettingsFragment_workspace on Workspace {\n  name\n  description\n  fullPath\n  ...WorkspaceGeneralSettingsFragment_workspace\n  ...WorkspaceRunSettingsFragment_workspace\n  ...WorkspaceAdvancedSettingsFragment_workspace\n}\n"
  }
};
})();

(node as any).hash = "bf01becf9164b83ab43327a67729eb3d";

export default node;
