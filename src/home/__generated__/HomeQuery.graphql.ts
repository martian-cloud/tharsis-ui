/**
 * @generated SignedSource<<fed30b387ca8be2ddb4141ff7be5fdec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeQuery$variables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
};
export type HomeQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"HomeActivityFragment_activity">;
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "CREATED_DESC"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = [
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "fullPath",
    "storageKey": null
  },
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourcePath",
  "storageKey": null
},
v11 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v10/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Team",
  "abstractKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    (v10/*: any*/)
  ],
  "type": "ServiceAccount",
  "abstractKey": null
},
v16 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "member",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v13/*: any*/),
    (v15/*: any*/),
    (v14/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v12/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v19 = [
  (v18/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "maintainer",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HomeActivityFragment_activity"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ActivityEventConnection",
        "kind": "LinkedField",
        "name": "activityEvents",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ActivityEventEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ActivityEvent",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "target",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v9/*: any*/),
                        "type": "Workspace",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v9/*: any*/),
                        "type": "Group",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v11/*: any*/),
                        "type": "ManagedIdentity",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "member",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v15/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "NamespaceMembership",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "gpgKeyId",
                            "storageKey": null
                          }
                        ],
                        "type": "GPGKey",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "runStage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ManagedIdentity",
                            "kind": "LinkedField",
                            "name": "managedIdentity",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "ManagedIdentityAccessRule",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v11/*: any*/),
                        "type": "ServiceAccount",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "key",
                            "storageKey": null
                          }
                        ],
                        "type": "NamespaceVariable",
                        "abstractKey": null
                      },
                      (v14/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "registryNamespace",
                            "storageKey": null
                          }
                        ],
                        "type": "TerraformProvider",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "action",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "payload",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          }
                        ],
                        "type": "ActivityEventDeleteChildResourcePayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "role",
                            "storageKey": null
                          }
                        ],
                        "type": "ActivityEventCreateNamespaceMembershipPayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/)
                        ],
                        "type": "ActivityEventRemoveNamespaceMembershipPayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "prevRole",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "newRole",
                            "storageKey": null
                          }
                        ],
                        "type": "ActivityEventUpdateNamespaceMembershipPayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v19/*: any*/),
                        "type": "ActivityEventUpdateTeamMemberPayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v18/*: any*/)
                        ],
                        "type": "ActivityEventRemoveTeamMemberPayload",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v19/*: any*/),
                        "type": "ActivityEventAddTeamMemberPayload",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
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
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "initiator",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          (v10/*: any*/)
                        ],
                        "type": "ServiceAccount",
                        "abstractKey": null
                      },
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "namespacePath",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
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
        "args": (v4/*: any*/),
        "filters": [
          "sort"
        ],
        "handle": "connection",
        "key": "HomeActivity_activityEvents",
        "kind": "LinkedHandle",
        "name": "activityEvents"
      }
    ]
  },
  "params": {
    "cacheID": "e22baa4545b1b7ccf4d34196388d3b89",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n) {\n  ...HomeActivityFragment_activity\n}\n\nfragment ActivityEventGPGKeyTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on GPGKey {\n      id\n      gpgKeyId\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventGroupTargetFragment_event on ActivityEvent {\n  action\n  target {\n    __typename\n    ... on Group {\n      name\n      fullPath\n      description\n    }\n    id\n  }\n  payload {\n    __typename\n    ... on ActivityEventDeleteChildResourcePayload {\n      name\n      type\n    }\n    ... on ActivityEventCreateNamespaceMembershipPayload {\n      member {\n        __typename\n        ... on User {\n          username\n        }\n        ... on ServiceAccount {\n          resourcePath\n        }\n        ... on Team {\n          name\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      role\n    }\n    ... on ActivityEventRemoveNamespaceMembershipPayload {\n      member {\n        __typename\n        ... on User {\n          username\n        }\n        ... on ServiceAccount {\n          resourcePath\n        }\n        ... on Team {\n          name\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventListFragment_connection on ActivityEventConnection {\n  edges {\n    node {\n      id\n      target {\n        __typename\n        id\n      }\n      ...ActivityEventWorkspaceTargetFragment_event\n      ...ActivityEventGroupTargetFragment_event\n      ...ActivityEventManagedIdentityTargetFragment_event\n      ...ActivityEventNamespaceMembershipTargetFragment_event\n      ...ActivityEventGPGKeyTargetFragment_event\n      ...ActivityEventManagedIdentityAccessRuleTargetFragment_event\n      ...ActivityEventServiceAccountTargetFragment_event\n      ...ActivityEventVariableTargetFragment_event\n      ...ActivityEventRunTargetFragment_event\n      ...ActivityEventStateVersionTargetFragment_event\n      ...ActivityEventTeamTargetFragment_event\n      ...ActivityEventTerraformProviderTargetFragment_event\n    }\n  }\n}\n\nfragment ActivityEventListItemFragment_event on ActivityEvent {\n  metadata {\n    createdAt\n  }\n  id\n  initiator {\n    __typename\n    ... on User {\n      username\n      email\n    }\n    ... on ServiceAccount {\n      name\n      resourcePath\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ActivityEventManagedIdentityAccessRuleTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on ManagedIdentityAccessRule {\n      runStage\n      managedIdentity {\n        id\n        resourcePath\n      }\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventManagedIdentityTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on ManagedIdentity {\n      id\n      name\n      description\n      resourcePath\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventNamespaceMembershipTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on NamespaceMembership {\n      member {\n        __typename\n        ... on User {\n          username\n        }\n        ... on Team {\n          name\n        }\n        ... on ServiceAccount {\n          resourcePath\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    id\n  }\n  payload {\n    __typename\n    ... on ActivityEventUpdateNamespaceMembershipPayload {\n      prevRole\n      newRole\n    }\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventRunTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on Run {\n      id\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventServiceAccountTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on ServiceAccount {\n      id\n      name\n      description\n      resourcePath\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventStateVersionTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on StateVersion {\n      id\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventTeamTargetFragment_event on ActivityEvent {\n  action\n  target {\n    __typename\n    ... on Team {\n      name\n    }\n    id\n  }\n  payload {\n    __typename\n    ... on ActivityEventUpdateTeamMemberPayload {\n      user {\n        username\n        id\n      }\n      maintainer\n    }\n    ... on ActivityEventRemoveTeamMemberPayload {\n      user {\n        username\n        id\n      }\n    }\n    ... on ActivityEventAddTeamMemberPayload {\n      user {\n        username\n        id\n      }\n      maintainer\n    }\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventTerraformProviderTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on TerraformProvider {\n      name\n      registryNamespace\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventVariableTargetFragment_event on ActivityEvent {\n  action\n  namespacePath\n  target {\n    __typename\n    ... on NamespaceVariable {\n      key\n    }\n    id\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment ActivityEventWorkspaceTargetFragment_event on ActivityEvent {\n  action\n  target {\n    __typename\n    ... on Workspace {\n      name\n      fullPath\n      description\n    }\n    id\n  }\n  payload {\n    __typename\n    ... on ActivityEventDeleteChildResourcePayload {\n      name\n      type\n    }\n    ... on ActivityEventCreateNamespaceMembershipPayload {\n      member {\n        __typename\n        ... on User {\n          username\n        }\n        ... on ServiceAccount {\n          resourcePath\n        }\n        ... on Team {\n          name\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      role\n    }\n    ... on ActivityEventRemoveNamespaceMembershipPayload {\n      member {\n        __typename\n        ... on User {\n          username\n        }\n        ... on ServiceAccount {\n          resourcePath\n        }\n        ... on Team {\n          name\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...ActivityEventListItemFragment_event\n}\n\nfragment HomeActivityFragment_activity on Query {\n  activityEvents(after: $after, before: $before, first: $first, last: $last, sort: CREATED_DESC) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...ActivityEventListFragment_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6c5ecfe9b82546066a031d49bfb5221";

export default node;
