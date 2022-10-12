/**
 * @generated SignedSource<<7c3a8f81daf2d11fa680649ffa14dab2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EditServiceAccountQuery$variables = {
  id: string;
};
export type EditServiceAccountQuery$data = {
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
export type EditServiceAccountQuery = {
  response: EditServiceAccountQuery$data;
  variables: EditServiceAccountQuery$variables;
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
    "name": "EditServiceAccountQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditServiceAccountQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c5a672fbbac8d7cc3681e76f9179b6a8",
    "id": null,
    "metadata": {},
    "name": "EditServiceAccountQuery",
    "operationKind": "query",
    "text": "query EditServiceAccountQuery(\n  $id: String!\n) {\n  serviceAccount(id: $id) {\n    id\n    name\n    description\n    resourcePath\n    createdBy\n    oidcTrustPolicies {\n      issuer\n      boundClaims {\n        name\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "17db3d21285c4d130d019346bf197e83";

export default node;
