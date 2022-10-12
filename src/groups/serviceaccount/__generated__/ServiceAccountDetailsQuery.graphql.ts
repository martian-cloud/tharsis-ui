/**
 * @generated SignedSource<<e0f770355aa91e4a99c791ca44ec81ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ServiceAccountDetailsQuery$variables = {
  id: string;
};
export type ServiceAccountDetailsQuery$data = {
  readonly serviceAccount: {
    readonly createdBy: string;
    readonly description: string;
    readonly id: string;
    readonly metadata: {
      readonly createdAt: any;
    };
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
export type ServiceAccountDetailsQuery = {
  response: ServiceAccountDetailsQuery$data;
  variables: ServiceAccountDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ServiceAccount",
    "kind": "LinkedField",
    "name": "serviceAccount",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ServiceAccountDetailsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ServiceAccountDetailsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fac1b171adfc9bf68ec29cfb9df408c5",
    "id": null,
    "metadata": {},
    "name": "ServiceAccountDetailsQuery",
    "operationKind": "query",
    "text": "query ServiceAccountDetailsQuery(\n  $id: String!\n) {\n  serviceAccount(id: $id) {\n    metadata {\n      createdAt\n    }\n    id\n    name\n    description\n    resourcePath\n    createdBy\n    oidcTrustPolicies {\n      issuer\n      boundClaims {\n        name\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8474fda2312d63245baa64cfbb1bf1b8";

export default node;
