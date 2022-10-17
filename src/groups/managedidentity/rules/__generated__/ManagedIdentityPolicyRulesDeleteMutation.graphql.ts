/**
 * @generated SignedSource<<360ffcce37e8742d6fbea5482a934e0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type DeleteManagedIdentityAccessRuleInput = {
  clientMutationId?: string | null;
  id: string;
};
export type ManagedIdentityPolicyRulesDeleteMutation$variables = {
  input: DeleteManagedIdentityAccessRuleInput;
};
export type ManagedIdentityPolicyRulesDeleteMutation$data = {
  readonly deleteManagedIdentityAccessRule: {
    readonly accessRule: {
      readonly id: string;
    } | null;
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type ManagedIdentityPolicyRulesDeleteMutation = {
  response: ManagedIdentityPolicyRulesDeleteMutation$data;
  variables: ManagedIdentityPolicyRulesDeleteMutation$variables;
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
    "name": "deleteManagedIdentityAccessRule",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "ManagedIdentityPolicyRulesDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ManagedIdentityPolicyRulesDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b58df76c1a651fdb2a60f991fa038445",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityPolicyRulesDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ManagedIdentityPolicyRulesDeleteMutation(\n  $input: DeleteManagedIdentityAccessRuleInput!\n) {\n  deleteManagedIdentityAccessRule(input: $input) {\n    accessRule {\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e1575676adf370a0a2b97248c696178";

export default node;
