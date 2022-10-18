/**
 * @generated SignedSource<<d529a344de58485de3bf268d492b4419>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type JobType = "apply" | "plan" | "%future added value";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type UpdateManagedIdentityAccessRuleInput = {
  allowedServiceAccounts: ReadonlyArray<string>;
  allowedTeams: ReadonlyArray<string>;
  allowedUsers: ReadonlyArray<string>;
  clientMutationId?: string | null;
  id: string;
  runStage: JobType;
};
export type ManagedIdentityPolicyRulesUpdateRuleMutation$variables = {
  input: UpdateManagedIdentityAccessRuleInput;
};
export type ManagedIdentityPolicyRulesUpdateRuleMutation$data = {
  readonly updateManagedIdentityAccessRule: {
    readonly accessRule: {
      readonly allowedServiceAccounts: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
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
export type ManagedIdentityPolicyRulesUpdateRuleMutation = {
  response: ManagedIdentityPolicyRulesUpdateRuleMutation$data;
  variables: ManagedIdentityPolicyRulesUpdateRuleMutation$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
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
    "name": "updateManagedIdentityAccessRule",
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
              (v2/*: any*/)
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
              (v2/*: any*/),
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
    "name": "ManagedIdentityPolicyRulesUpdateRuleMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagedIdentityPolicyRulesUpdateRuleMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "efda333702d462261330264303a64ac1",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityPolicyRulesUpdateRuleMutation",
    "operationKind": "mutation",
    "text": "mutation ManagedIdentityPolicyRulesUpdateRuleMutation(\n  $input: UpdateManagedIdentityAccessRuleInput!\n) {\n  updateManagedIdentityAccessRule(input: $input) {\n    accessRule {\n      id\n      runStage\n      allowedUsers {\n        id\n        username\n        email\n      }\n      allowedTeams {\n        id\n        name\n      }\n      allowedServiceAccounts {\n        id\n        name\n        resourcePath\n      }\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ade5228c04459afc6d477e776de086f2";

export default node;
