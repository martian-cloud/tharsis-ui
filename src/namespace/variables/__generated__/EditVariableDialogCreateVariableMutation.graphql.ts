/**
 * @generated SignedSource<<1d4a26d26d4c3afa0da6a2dff836ff04>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type VariableCategory = "environment" | "terraform" | "%future added value";
export type CreateNamespaceVariableInput = {
  category: VariableCategory;
  clientMutationId?: string | null;
  hcl?: boolean | null;
  key: string;
  namespacePath: string;
  value: string;
};
export type EditVariableDialogCreateVariableMutation$variables = {
  input: CreateNamespaceVariableInput;
};
export type EditVariableDialogCreateVariableMutation$data = {
  readonly createNamespaceVariable: {
    readonly namespace: {
      readonly id: string;
      readonly variables: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"VariableListItemFragment_variable">;
      }>;
    } | null;
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type EditVariableDialogCreateVariableMutation = {
  response: EditVariableDialogCreateVariableMutation$data;
  variables: EditVariableDialogCreateVariableMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditVariableDialogCreateVariableMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NamespaceVariableMutationPayload",
        "kind": "LinkedField",
        "name": "createNamespaceVariable",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "namespace",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NamespaceVariable",
                "kind": "LinkedField",
                "name": "variables",
                "plural": true,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "VariableListItemFragment_variable"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditVariableDialogCreateVariableMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NamespaceVariableMutationPayload",
        "kind": "LinkedField",
        "name": "createNamespaceVariable",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "namespace",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NamespaceVariable",
                "kind": "LinkedField",
                "name": "variables",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "key",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "category",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "namespacePath",
                    "storageKey": null
                  },
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
                        "name": "updatedAt",
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
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cd425c13c5b36d2c5be76e220b7da385",
    "id": null,
    "metadata": {},
    "name": "EditVariableDialogCreateVariableMutation",
    "operationKind": "mutation",
    "text": "mutation EditVariableDialogCreateVariableMutation(\n  $input: CreateNamespaceVariableInput!\n) {\n  createNamespaceVariable(input: $input) {\n    namespace {\n      __typename\n      id\n      variables {\n        ...VariableListItemFragment_variable\n        id\n      }\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n\nfragment VariableListItemFragment_variable on NamespaceVariable {\n  id\n  key\n  category\n  value\n  namespacePath\n  metadata {\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa9950a478657b277566b750e295a98f";

export default node;
