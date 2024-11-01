/**
 * @generated SignedSource<<89418ed3967dcb34ea9402f69e752c06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type UnlockWorkspaceInput = {
  clientMutationId?: string | null;
  workspacePath: string;
};
export type WorkspaceStateSettingsUnlockWorkspaceMutation$variables = {
  input: UnlockWorkspaceInput;
};
export type WorkspaceStateSettingsUnlockWorkspaceMutation$data = {
  readonly unlockWorkspace: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly workspace: {
      readonly fullPath: string;
      readonly locked: boolean;
    } | null;
  };
};
export type WorkspaceStateSettingsUnlockWorkspaceMutation = {
  response: WorkspaceStateSettingsUnlockWorkspaceMutation$data;
  variables: WorkspaceStateSettingsUnlockWorkspaceMutation$variables;
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
  "name": "fullPath",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "locked",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WorkspaceStateSettingsUnlockWorkspaceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlockWorkspacePayload",
        "kind": "LinkedField",
        "name": "unlockWorkspace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Workspace",
            "kind": "LinkedField",
            "name": "workspace",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WorkspaceStateSettingsUnlockWorkspaceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlockWorkspacePayload",
        "kind": "LinkedField",
        "name": "unlockWorkspace",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Workspace",
            "kind": "LinkedField",
            "name": "workspace",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "996aa0b7d855811fa6320d517306b3b4",
    "id": null,
    "metadata": {},
    "name": "WorkspaceStateSettingsUnlockWorkspaceMutation",
    "operationKind": "mutation",
    "text": "mutation WorkspaceStateSettingsUnlockWorkspaceMutation(\n  $input: UnlockWorkspaceInput!\n) {\n  unlockWorkspace(input: $input) {\n    workspace {\n      fullPath\n      locked\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8b18f37c76263c65d9af42c6c554dc55";

export default node;
