/**
 * @generated SignedSource<<b9a7c7123e4a781ea6b5212f118aa96d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type DeleteNamespaceMembershipInput = {
  clientMutationId?: string | null;
  id: string;
  metadata?: ResourceMetadataInput | null;
};
export type ResourceMetadataInput = {
  version: string;
};
export type NamespaceMembershipListDeleteNamespaceMembershipMutation$variables = {
  input: DeleteNamespaceMembershipInput;
};
export type NamespaceMembershipListDeleteNamespaceMembershipMutation$data = {
  readonly deleteNamespaceMembership: {
    readonly namespace: {
      readonly memberships: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"NamespaceMembershipListItemFragment_membership">;
      }>;
    } | null;
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type NamespaceMembershipListDeleteNamespaceMembershipMutation = {
  response: NamespaceMembershipListDeleteNamespaceMembershipMutation$data;
  variables: NamespaceMembershipListDeleteNamespaceMembershipMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Problem",
  "kind": "LinkedField",
  "name": "problems",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourcePath",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NamespaceMembershipListDeleteNamespaceMembershipMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NamespaceMembershipMutationPayload",
        "kind": "LinkedField",
        "name": "deleteNamespaceMembership",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "namespace",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "NamespaceMembership",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": true,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "NamespaceMembershipListItemFragment_membership"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NamespaceMembershipListDeleteNamespaceMembershipMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NamespaceMembershipMutationPayload",
        "kind": "LinkedField",
        "name": "deleteNamespaceMembership",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "namespace",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NamespaceMembership",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": true,
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "updatedAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "role",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "member",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
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
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v6/*: any*/)
                        ],
                        "type": "Team",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v6/*: any*/),
                          (v5/*: any*/)
                        ],
                        "type": "ServiceAccount",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a07d37d18c379dce3df5c2811304c113",
    "id": null,
    "metadata": {},
    "name": "NamespaceMembershipListDeleteNamespaceMembershipMutation",
    "operationKind": "mutation",
    "text": "mutation NamespaceMembershipListDeleteNamespaceMembershipMutation(\n  $input: DeleteNamespaceMembershipInput!\n) {\n  deleteNamespaceMembership(input: $input) {\n    namespace {\n      __typename\n      memberships {\n        ...NamespaceMembershipListItemFragment_membership\n        id\n      }\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n\nfragment NamespaceMembershipListItemFragment_membership on NamespaceMembership {\n  metadata {\n    createdAt\n    updatedAt\n  }\n  id\n  role\n  resourcePath\n  member {\n    __typename\n    ... on User {\n      id\n      username\n      email\n    }\n    ... on Team {\n      id\n      name\n    }\n    ... on ServiceAccount {\n      id\n      name\n      resourcePath\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2cb265d8959a682935fcbb80557fc404";

export default node;
