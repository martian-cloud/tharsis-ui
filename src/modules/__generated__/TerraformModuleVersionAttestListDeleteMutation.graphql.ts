/**
 * @generated SignedSource<<9ec10ec66f6c3b81aa43f87ed46b8aac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type DeleteTerraformModuleAttestationInput = {
  clientMutationId?: string | null;
  id: string;
};
export type TerraformModuleVersionAttestListDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteTerraformModuleAttestationInput;
};
export type TerraformModuleVersionAttestListDeleteMutation$data = {
  readonly deleteTerraformModuleAttestation: {
    readonly moduleAttestation: {
      readonly id: string;
    } | null;
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type TerraformModuleVersionAttestListDeleteMutation = {
  response: TerraformModuleVersionAttestListDeleteMutation$data;
  variables: TerraformModuleVersionAttestListDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TerraformModuleVersionAttestListDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTerraformModuleAttestationPayload",
        "kind": "LinkedField",
        "name": "deleteTerraformModuleAttestation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TerraformModuleAttestation",
            "kind": "LinkedField",
            "name": "moduleAttestation",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TerraformModuleVersionAttestListDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTerraformModuleAttestationPayload",
        "kind": "LinkedField",
        "name": "deleteTerraformModuleAttestation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TerraformModuleAttestation",
            "kind": "LinkedField",
            "name": "moduleAttestation",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d71301f6dbdb90cd4c219779a162232e",
    "id": null,
    "metadata": {},
    "name": "TerraformModuleVersionAttestListDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TerraformModuleVersionAttestListDeleteMutation(\n  $input: DeleteTerraformModuleAttestationInput!\n) {\n  deleteTerraformModuleAttestation(input: $input) {\n    moduleAttestation {\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3db35356a96336036bdd9b147900f1a4";

export default node;
