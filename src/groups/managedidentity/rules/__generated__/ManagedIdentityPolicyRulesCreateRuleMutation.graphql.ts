/**
 * @generated SignedSource<<50919d2c257de217859d988fb359fca7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type JobType = "apply" | "plan" | "%future added value";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type CreateManagedIdentityAccessRuleInput = {
  allowedServiceAccounts: ReadonlyArray<string>;
  allowedTeams: ReadonlyArray<string>;
  allowedUsers: ReadonlyArray<string>;
  clientMutationId?: string | null;
  managedIdentityId: string;
  runStage: JobType;
};
export type ManagedIdentityPolicyRulesCreateRuleMutation$variables = {
  input: CreateManagedIdentityAccessRuleInput;
};
export type ManagedIdentityPolicyRulesCreateRuleMutation$data = {
  readonly createManagedIdentityAccessRule: {
    readonly accessRule: {
      readonly allowedServiceAccounts: ReadonlyArray<{
        readonly id: string;
        readonly resourcePath: string;
      }>;
      readonly allowedTeams: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
      readonly allowedUsers: ReadonlyArray<{
        readonly email: string;
        readonly id: string;
        readonly username: string;
      }>;
      readonly id: string;
      readonly runStage: JobType;
    } | null;
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type ManagedIdentityPolicyRulesCreateRuleMutation = {
  response: ManagedIdentityPolicyRulesCreateRuleMutation$data;
  variables: ManagedIdentityPolicyRulesCreateRuleMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ManagedIdentityAccessRuleMutationPayload",
    "kind": "LinkedField",
    "name": "createManagedIdentityAccessRule",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ManagedIdentityAccessRule",
        "kind": "LinkedField",
        "name": "accessRule",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "allowedUsers",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Team",
            "kind": "LinkedField",
            "name": "allowedTeams",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ServiceAccount",
            "kind": "LinkedField",
            "name": "allowedServiceAccounts",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "resourcePath",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ManagedIdentityPolicyRulesCreateRuleMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagedIdentityPolicyRulesCreateRuleMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4c06f51516df33a827f8abbb9d14271b",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityPolicyRulesCreateRuleMutation",
    "operationKind": "mutation",
    "text": "mutation ManagedIdentityPolicyRulesCreateRuleMutation(\n  $input: CreateManagedIdentityAccessRuleInput!\n) {\n  createManagedIdentityAccessRule(input: $input) {\n    accessRule {\n      id\n      runStage\n      allowedUsers {\n        id\n        username\n        email\n      }\n      allowedTeams {\n        id\n        name\n      }\n      allowedServiceAccounts {\n        id\n        resourcePath\n      }\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dd6542ecf91b9ea1933b3f78b7644415";

export default node;
