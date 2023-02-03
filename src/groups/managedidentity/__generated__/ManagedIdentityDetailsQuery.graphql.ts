/**
 * @generated SignedSource<<185faf21092db089e45b51b453bf7016>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JobType = "apply" | "plan" | "%future added value";
export type ManagedIdentityDetailsQuery$variables = {
  id: string;
};
export type ManagedIdentityDetailsQuery$data = {
  readonly managedIdentity: {
    readonly accessRules: ReadonlyArray<{
      readonly allowedServiceAccounts: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly resourcePath: string;
      }> | null;
      readonly allowedTeams: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }> | null;
      readonly allowedUsers: ReadonlyArray<{
        readonly email: string;
        readonly id: string;
        readonly username: string;
      }> | null;
      readonly id: string;
      readonly runStage: JobType;
    }>;
    readonly data: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityRulesFragment_managedIdentity">;
  } | null;
};
export type ManagedIdentityDetailsQuery = {
  response: ManagedIdentityDetailsQuery$data;
  variables: ManagedIdentityDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "runStage",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "allowedUsers",
  "plural": true,
  "selections": [
    (v2/*: any*/),
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
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Team",
  "kind": "LinkedField",
  "name": "allowedTeams",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ServiceAccount",
  "kind": "LinkedField",
  "name": "allowedServiceAccounts",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourcePath",
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
    "name": "ManagedIdentityDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ManagedIdentity",
        "kind": "LinkedField",
        "name": "managedIdentity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ManagedIdentityAccessRule",
            "kind": "LinkedField",
            "name": "accessRules",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ManagedIdentityRulesFragment_managedIdentity"
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
    "name": "ManagedIdentityDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ManagedIdentity",
        "kind": "LinkedField",
        "name": "managedIdentity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ManagedIdentityAccessRule",
            "kind": "LinkedField",
            "name": "accessRules",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ManagedIdentityAccessRuleModuleAttestationPolicy",
                "kind": "LinkedField",
                "name": "moduleAttestationPolicies",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "publicKey",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "predicateType",
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
      }
    ]
  },
  "params": {
    "cacheID": "da399284bb6d805792de1e642e9c3d44",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityDetailsQuery",
    "operationKind": "query",
    "text": "query ManagedIdentityDetailsQuery(\n  $id: String!\n) {\n  managedIdentity(id: $id) {\n    id\n    name\n    description\n    type\n    data\n    accessRules {\n      id\n      runStage\n      allowedUsers {\n        id\n        username\n        email\n      }\n      allowedTeams {\n        id\n        name\n      }\n      allowedServiceAccounts {\n        id\n        name\n        resourcePath\n      }\n    }\n    ...ManagedIdentityRulesFragment_managedIdentity\n  }\n}\n\nfragment ManagedIdentityRulesFragment_managedIdentity on ManagedIdentity {\n  id\n  accessRules {\n    id\n    type\n    runStage\n    moduleAttestationPolicies {\n      publicKey\n      predicateType\n    }\n    allowedUsers {\n      id\n      username\n      email\n    }\n    allowedTeams {\n      id\n      name\n    }\n    allowedServiceAccounts {\n      id\n      name\n      resourcePath\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca3352c59709ec772f13440cedea1493";

export default node;
