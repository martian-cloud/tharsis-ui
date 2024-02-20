/**
 * @generated SignedSource<<ae504f29867dae0b0836c69a9f3b0b2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type UpdateServiceAccountInput = {
  clientMutationId?: string | null;
  description: string;
  id: string;
  metadata?: ResourceMetadataInput | null;
  oidcTrustPolicies: ReadonlyArray<OIDCTrustPolicyInput>;
};
export type ResourceMetadataInput = {
  version: string;
};
export type OIDCTrustPolicyInput = {
  boundClaims: ReadonlyArray<JWTClaimInput>;
  issuer: string;
};
export type JWTClaimInput = {
  name: string;
  value: string;
};
export type EditServiceAccountMutation$variables = {
  input: UpdateServiceAccountInput;
};
export type EditServiceAccountMutation$data = {
  readonly updateServiceAccount: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly serviceAccount: {
      readonly createdBy: string;
      readonly description: string;
      readonly id: string;
      readonly name: string;
      readonly oidcTrustPolicies: ReadonlyArray<{
        readonly boundClaims: ReadonlyArray<{
          readonly name: string;
          readonly value: string;
        }>;
        readonly issuer: string;
      }>;
      readonly resourcePath: string;
    } | null;
  };
};
export type EditServiceAccountMutation = {
  response: EditServiceAccountMutation$data;
  variables: EditServiceAccountMutation$variables;
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
  "name": "name",
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
    "concreteType": "UpdateServiceAccountPayload",
    "kind": "LinkedField",
    "name": "updateServiceAccount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ServiceAccount",
        "kind": "LinkedField",
        "name": "serviceAccount",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v1/*: any*/),
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
            "name": "resourcePath",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdBy",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OIDCTrustPolicy",
            "kind": "LinkedField",
            "name": "oidcTrustPolicies",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "issuer",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "JWTClaim",
                "kind": "LinkedField",
                "name": "boundClaims",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  }
                ],
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
    "name": "EditServiceAccountMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditServiceAccountMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "db436b9719aa51d209950789024e4bac",
    "id": null,
    "metadata": {},
    "name": "EditServiceAccountMutation",
    "operationKind": "mutation",
    "text": "mutation EditServiceAccountMutation(\n  $input: UpdateServiceAccountInput!\n) {\n  updateServiceAccount(input: $input) {\n    serviceAccount {\n      id\n      name\n      description\n      resourcePath\n      createdBy\n      oidcTrustPolicies {\n        issuer\n        boundClaims {\n          name\n          value\n        }\n      }\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c4eb2d977fe0d51d669e68d0286eb7d";

export default node;
