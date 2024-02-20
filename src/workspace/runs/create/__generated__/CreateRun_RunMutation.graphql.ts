/**
 * @generated SignedSource<<11b3c02b3ff61ca51b64ae5be512a7b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type VariableCategory = "environment" | "terraform" | "%future added value";
export type CreateRunInput = {
  clientMutationId?: string | null;
  comment?: string | null;
  configurationVersionId?: string | null;
  isDestroy?: boolean | null;
  moduleSource?: string | null;
  moduleVersion?: string | null;
  refresh?: boolean | null;
  speculative?: boolean | null;
  targetAddresses?: ReadonlyArray<string> | null;
  terraformVersion?: string | null;
  variables?: ReadonlyArray<RunVariableInput> | null;
  workspacePath: string;
};
export type RunVariableInput = {
  category: VariableCategory;
  hcl: boolean;
  key: string;
  value: string;
};
export type CreateRun_RunMutation$variables = {
  input: CreateRunInput;
};
export type CreateRun_RunMutation$data = {
  readonly createRun: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly run: {
      readonly id: string;
    } | null;
  };
};
export type CreateRun_RunMutation = {
  response: CreateRun_RunMutation$data;
  variables: CreateRun_RunMutation$variables;
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
    "concreteType": "RunMutationPayload",
    "kind": "LinkedField",
    "name": "createRun",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Run",
        "kind": "LinkedField",
        "name": "run",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "CreateRun_RunMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRun_RunMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4a639a7ddac4c4d3f4e28f51fec39c17",
    "id": null,
    "metadata": {},
    "name": "CreateRun_RunMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRun_RunMutation(\n  $input: CreateRunInput!\n) {\n  createRun(input: $input) {\n    run {\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9985e431870f2b2c7b9df04360dab311";

export default node;
