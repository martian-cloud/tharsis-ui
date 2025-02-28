/**
 * @generated SignedSource<<2c31e32949c943ed427d862e1359e7b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SensitiveVariableValueQuery$variables = {
  id: string;
};
export type SensitiveVariableValueQuery$data = {
  readonly namespaceVariableVersion: {
    readonly id: string;
    readonly value: string | null;
  } | null;
};
export type SensitiveVariableValueQuery = {
  response: SensitiveVariableValueQuery$data;
  variables: SensitiveVariableValueQuery$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Literal",
        "name": "includeSensitiveValue",
        "value": true
      }
    ],
    "concreteType": "NamespaceVariableVersion",
    "kind": "LinkedField",
    "name": "namespaceVariableVersion",
    "plural": false,
    "selections": [
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
        "name": "value",
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
    "name": "SensitiveVariableValueQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SensitiveVariableValueQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "da0a3c24970a4e06480dba830351703a",
    "id": null,
    "metadata": {},
    "name": "SensitiveVariableValueQuery",
    "operationKind": "query",
    "text": "query SensitiveVariableValueQuery(\n  $id: String!\n) {\n  namespaceVariableVersion(id: $id, includeSensitiveValue: true) {\n    id\n    value\n  }\n}\n"
  }
};
})();

(node as any).hash = "73e4878f0dcdbdc85ae33b9d0bb38b21";

export default node;
