/**
 * @generated SignedSource<<9bc8c2b0c714dd5ee686ac59162283cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type UpdateUserAdminStatusInput = {
  admin: boolean;
  userId: string;
};
export type AdminAreaUserListItemUpdateUserAdminStatusMutation$variables = {
  input: UpdateUserAdminStatusInput;
};
export type AdminAreaUserListItemUpdateUserAdminStatusMutation$data = {
  readonly updateUserAdminStatus: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"AdminAreaUserListItemFragment_user">;
    } | null;
  };
};
export type AdminAreaUserListItemUpdateUserAdminStatusMutation = {
  response: AdminAreaUserListItemUpdateUserAdminStatusMutation$data;
  variables: AdminAreaUserListItemUpdateUserAdminStatusMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminAreaUserListItemUpdateUserAdminStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserAdminStatusPayload",
        "kind": "LinkedField",
        "name": "updateUserAdminStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AdminAreaUserListItemFragment_user"
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
    "name": "AdminAreaUserListItemUpdateUserAdminStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserAdminStatusPayload",
        "kind": "LinkedField",
        "name": "updateUserAdminStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
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
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e928f6096188d172c366d88935f6f335",
    "id": null,
    "metadata": {},
    "name": "AdminAreaUserListItemUpdateUserAdminStatusMutation",
    "operationKind": "mutation",
    "text": "mutation AdminAreaUserListItemUpdateUserAdminStatusMutation(\n  $input: UpdateUserAdminStatusInput!\n) {\n  updateUserAdminStatus(input: $input) {\n    user {\n      ...AdminAreaUserListItemFragment_user\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n\nfragment AdminAreaUserListItemFragment_user on User {\n  metadata {\n    createdAt\n  }\n  id\n  username\n  email\n  admin\n  active\n  scimExternalId\n}\n"
  }
};
})();

(node as any).hash = "8e100824c2b342197199b61f35724cfd";

export default node;
