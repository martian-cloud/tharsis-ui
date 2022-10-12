/**
 * @generated SignedSource<<5fc368917fc98b1fcae7872e3efa9e6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ManagedIdentityDetailsQuery$variables = {
  id: string;
};
export type ManagedIdentityDetailsQuery$data = {
  readonly managedIdentity: {
    readonly data: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityPolicyDetailsFragment_managedIdentity">;
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ManagedIdentityPolicyDetailsFragment_managedIdentity"
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ebb14eff781c6187a68273d819037059",
    "id": null,
    "metadata": {},
    "name": "ManagedIdentityDetailsQuery",
    "operationKind": "query",
    "text": "query ManagedIdentityDetailsQuery(\n  $id: String!\n) {\n  managedIdentity(id: $id) {\n    id\n    name\n    description\n    type\n    data\n    ...ManagedIdentityPolicyDetailsFragment_managedIdentity\n  }\n}\n\nfragment ManagedIdentityPolicyDetailsFragment_managedIdentity on ManagedIdentity {\n  accessRules {\n    id\n    runStage\n    allowedUsers {\n      id\n      username\n      email\n    }\n    allowedTeams {\n      id\n      name\n    }\n    allowedServiceAccounts {\n      id\n      resourcePath\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ab1c3db0e6c03e04e9a0cf8b5007853";

export default node;
