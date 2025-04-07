/**
 * @generated SignedSource<<1831c0ebb50dc373ad19cfdffa8c9b26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProblemType = "BAD_REQUEST" | "CONFLICT" | "FORBIDDEN" | "NOT_FOUND" | "SERVICE_UNAVAILABLE" | "%future added value";
export type UpdateWorkspaceInput = {
  clientMutationId?: string | null;
  description?: string | null;
  driftDetectionEnabled?: NamespaceDriftDetectionEnabledInput | null;
  id?: string | null;
  maxJobDuration?: number | null;
  metadata?: ResourceMetadataInput | null;
  preventDestroyPlan?: boolean | null;
  runnerTags?: NamespaceRunnerTagsInput | null;
  terraformVersion?: string | null;
  workspacePath?: string | null;
};
export type NamespaceDriftDetectionEnabledInput = {
  enabled?: boolean | null;
  inherit: boolean;
};
export type ResourceMetadataInput = {
  version: string;
};
export type NamespaceRunnerTagsInput = {
  inherit: boolean;
  tags?: ReadonlyArray<string> | null;
};
export type WorkspaceDriftDetectionSettingsMutation$variables = {
  input: UpdateWorkspaceInput;
};
export type WorkspaceDriftDetectionSettingsMutation$data = {
  readonly updateWorkspace: {
    readonly problems: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
      readonly type: ProblemType;
    }>;
    readonly workspace: {
      readonly driftDetectionEnabled: {
        readonly " $fragmentSpreads": FragmentRefs<"DriftDetectionSettingsFormFragment_driftDetectionEnabled">;
      };
    } | null;
  };
};
export type WorkspaceDriftDetectionSettingsMutation = {
  response: WorkspaceDriftDetectionSettingsMutation$data;
  variables: WorkspaceDriftDetectionSettingsMutation$variables;
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
    "name": "WorkspaceDriftDetectionSettingsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateWorkspacePayload",
        "kind": "LinkedField",
        "name": "updateWorkspace",
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
                "concreteType": "NamespaceDriftDetectionEnabled",
                "kind": "LinkedField",
                "name": "driftDetectionEnabled",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "DriftDetectionSettingsFormFragment_driftDetectionEnabled"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
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
    "name": "WorkspaceDriftDetectionSettingsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateWorkspacePayload",
        "kind": "LinkedField",
        "name": "updateWorkspace",
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
                "concreteType": "NamespaceDriftDetectionEnabled",
                "kind": "LinkedField",
                "name": "driftDetectionEnabled",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "inherited",
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
                    "kind": "ScalarField",
                    "name": "value",
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
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f3c61ed93b91e581d43cf2e3b406c62f",
    "id": null,
    "metadata": {},
    "name": "WorkspaceDriftDetectionSettingsMutation",
    "operationKind": "mutation",
    "text": "mutation WorkspaceDriftDetectionSettingsMutation(\n  $input: UpdateWorkspaceInput!\n) {\n  updateWorkspace(input: $input) {\n    workspace {\n      driftDetectionEnabled {\n        ...DriftDetectionSettingsFormFragment_driftDetectionEnabled\n      }\n      id\n    }\n    problems {\n      message\n      field\n      type\n    }\n  }\n}\n\nfragment DriftDetectionSettingsFormFragment_driftDetectionEnabled on NamespaceDriftDetectionEnabled {\n  inherited\n  namespacePath\n  value\n}\n"
  }
};
})();

(node as any).hash = "9bf7041749071610978ee6b906f9119b";

export default node;
