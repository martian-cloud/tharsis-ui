/**
 * @generated SignedSource<<84f897ee99ace99cbdf313232aaa507b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type UpdateVCSProviderInput = {
  clientMutationId?: string | null;
  description?: string | null;
  id: string;
  metadata?: ResourceMetadataInput | null;
  oAuthClientId?: string | null;
  oAuthClientSecret?: string | null;
};
export type ResourceMetadataInput = {
  version: string;
};
export type EditVCSProviderOAuthCredentialsMutation$variables = {
  input: UpdateVCSProviderInput;
};
export type EditVCSProviderOAuthCredentialsMutation$data = {
  readonly updateVCSProvider: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly vcsProvider: {
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type EditVCSProviderOAuthCredentialsMutation = {
  response: EditVCSProviderOAuthCredentialsMutation$data;
  variables: EditVCSProviderOAuthCredentialsMutation$variables;
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
    "concreteType": "UpdateVCSProviderPayload",
    "kind": "LinkedField",
    "name": "updateVCSProvider",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "VCSProvider",
        "kind": "LinkedField",
        "name": "vcsProvider",
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
            "name": "name",
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
    "name": "EditVCSProviderOAuthCredentialsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditVCSProviderOAuthCredentialsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "67801465e61f5c1244a28c5af6b60607",
    "id": null,
    "metadata": {},
    "name": "EditVCSProviderOAuthCredentialsMutation",
    "operationKind": "mutation",
    "text": "mutation EditVCSProviderOAuthCredentialsMutation(\n  $input: UpdateVCSProviderInput!\n) {\n  updateVCSProvider(input: $input) {\n    vcsProvider {\n      id\n      name\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ca1c4af64fbdf7f6120dca35199e872";

export default node;
