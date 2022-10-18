/**
 * @generated SignedSource<<9977d5d0f0fc3699c4b364b86fc78090>>
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
    }>;
    readonly data: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityPolicyRulesFragment_managedIdentity">;
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
  "concreteType": "ManagedIdentityAccessRule",
  "kind": "LinkedField",
  "name": "accessRules",
  "plural": true,
  "selections": [
    (v2/*: any*/),
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
    {
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
    {
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
          (v7/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ManagedIdentityPolicyRulesFragment_managedIdentity"
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
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d8587083f2d7683295074ee45f9b2ce8",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityDetailsQuery",
    "operationKind": "query",
    "text": "query ManagedIdentityDetailsQuery(\n  $id: String!\n) {\n  managedIdentity(id: $id) {\n    id\n    name\n    description\n    type\n    data\n    accessRules {\n      id\n      runStage\n      allowedUsers {\n        id\n        username\n        email\n      }\n      allowedTeams {\n        id\n        name\n      }\n      allowedServiceAccounts {\n        id\n        name\n        resourcePath\n      }\n    }\n    ...ManagedIdentityPolicyRulesFragment_managedIdentity\n  }\n}\n\nfragment ManagedIdentityPolicyRulesFragment_managedIdentity on ManagedIdentity {\n  id\n  accessRules {\n    id\n    runStage\n    allowedUsers {\n      id\n      username\n      email\n    }\n    allowedTeams {\n      id\n      name\n    }\n    allowedServiceAccounts {\n      id\n      name\n      resourcePath\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2dd239065a793f284ad308334b68632";

export default node;
