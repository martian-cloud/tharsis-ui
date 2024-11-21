/**
 * @generated SignedSource<<3f2a9c9fdf24173f6d6e0fafefd4e37e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type MigrateWorkspaceInput = {
  clientMutationId?: string | null;
  newGroupPath: string;
  workspacePath: string;
};
export type MigrateWorkspaceDialogMutation$variables = {
  input: MigrateWorkspaceInput;
};
export type MigrateWorkspaceDialogMutation$data = {
  readonly migrateWorkspace: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly workspace: {
      readonly fullPath: string;
      readonly groupPath: string;
      readonly id: string;
    } | null;
  };
};
export type MigrateWorkspaceDialogMutation = {
  response: MigrateWorkspaceDialogMutation$data;
  variables: MigrateWorkspaceDialogMutation$variables;
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
    "concreteType": "MigrateWorkspacePayload",
    "kind": "LinkedField",
    "name": "migrateWorkspace",
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
            "name": "fullPath",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "groupPath",
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
    "name": "MigrateWorkspaceDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MigrateWorkspaceDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "39ceeb8de89412343eafc58f150da0cd",
    "id": null,
    "metadata": {},
    "name": "MigrateWorkspaceDialogMutation",
    "operationKind": "mutation",
    "text": "mutation MigrateWorkspaceDialogMutation(\n  $input: MigrateWorkspaceInput!\n) {\n  migrateWorkspace(input: $input) {\n    workspace {\n      id\n      fullPath\n      groupPath\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9dba2f3b1712e7abda4b9daebfee0219";

export default node;
