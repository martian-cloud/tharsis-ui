/**
 * @generated SignedSource<<300f51f520997fdd931aeda34a2589d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "%future added value";
export type DeleteWorkspaceInput = {
  clientMutationId?: string | null;
  force?: boolean | null;
  metadata?: ResourceMetadataInput | null;
  workspacePath: string;
};
export type ResourceMetadataInput = {
  version: string;
};
export type WorkspaceDetailsIndexMutation$variables = {
  input: DeleteWorkspaceInput;
};
export type WorkspaceDetailsIndexMutation$data = {
  readonly deleteWorkspace: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
  };
};
export type WorkspaceDetailsIndexMutation = {
  response: WorkspaceDetailsIndexMutation$data;
  variables: WorkspaceDetailsIndexMutation$variables;
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
    "concreteType": "DeleteWorkspacePayload",
    "kind": "LinkedField",
    "name": "deleteWorkspace",
    "plural": false,
    "selections": [
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
    "name": "WorkspaceDetailsIndexMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WorkspaceDetailsIndexMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1db665f29acff5d35ebfd3370789d739",
    "id": null,
    "metadata": {},
    "name": "WorkspaceDetailsIndexMutation",
    "operationKind": "mutation",
    "text": "mutation WorkspaceDetailsIndexMutation(\n  $input: DeleteWorkspaceInput!\n) {\n  deleteWorkspace(input: $input) {\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "69d5ab78ea290de881f72e0eea1aa264";

export default node;
