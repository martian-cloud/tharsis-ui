/**
 * @generated SignedSource<<fa9139180f5716f957290dada196f467>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunSubscriptionInput = {
  runId?: string | null;
  workspacePath?: string | null;
};
export type WorkspaceDetailsRunSubscription$variables = {
  input: RunSubscriptionInput;
};
export type WorkspaceDetailsRunSubscription$data = {
  readonly workspaceRunEvents: {
    readonly action: string;
    readonly run: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"RunDetailsApplyStageFragment_apply" | "RunDetailsPlanStageFragment_plan" | "RunDetailsSidebarFragment_details" | "RunListItemFragment_run">;
    };
  };
};
export type WorkspaceDetailsRunSubscription = {
  response: WorkspaceDetailsRunSubscription$data;
  variables: WorkspaceDetailsRunSubscription$variables;
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
  "name": "action",
  "storageKey": null
},
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
  "concreteType": "ResourceMetadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Job",
  "kind": "LinkedField",
  "name": "currentJob",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "runnerPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cancelRequested",
      "storageKey": null
    },
    (v3/*: any*/),
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "JobTimestamps",
      "kind": "LinkedField",
      "name": "timestamps",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "queuedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pendingAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "runningAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "finishedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logLastUpdatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logSize",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "limit",
          "value": 51200
        },
        {
          "kind": "Literal",
          "name": "startOffset",
          "value": 0
        }
      ],
      "kind": "ScalarField",
      "name": "logs",
      "storageKey": "logs(limit:51200,startOffset:0)"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WorkspaceDetailsRunSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RunEvent",
        "kind": "LinkedField",
        "name": "workspaceRunEvents",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Run",
            "kind": "LinkedField",
            "name": "run",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RunListItemFragment_run"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RunDetailsSidebarFragment_details"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RunDetailsPlanStageFragment_plan"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RunDetailsApplyStageFragment_apply"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WorkspaceDetailsRunSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RunEvent",
        "kind": "LinkedField",
        "name": "workspaceRunEvents",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Run",
            "kind": "LinkedField",
            "name": "run",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdBy",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isDestroy",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Plan",
                "kind": "LinkedField",
                "name": "plan",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "resourceAdditions",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "resourceChanges",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "resourceDestructions",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Apply",
                "kind": "LinkedField",
                "name": "apply",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "triggeredBy",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "moduleSource",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "moduleVersion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConfigurationVersion",
                "kind": "LinkedField",
                "name": "configurationVersion",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "RunVariable",
                "kind": "LinkedField",
                "name": "variables",
                "plural": true,
                "selections": [
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
                    "name": "namespacePath",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hcl",
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
                "name": "forceCancelAvailableAt",
                "storageKey": null
              },
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
                    "name": "fullPath",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6f67615c54e5f834b49fdf5e80615bda",
    "id": null,
    "metadata": {},
    "name": "WorkspaceDetailsRunSubscription",
    "operationKind": "subscription",
    "text": "subscription WorkspaceDetailsRunSubscription(\n  $input: RunSubscriptionInput!\n) {\n  workspaceRunEvents(input: $input) {\n    action\n    run {\n      id\n      ...RunListItemFragment_run\n      ...RunDetailsSidebarFragment_details\n      ...RunDetailsPlanStageFragment_plan\n      ...RunDetailsApplyStageFragment_apply\n    }\n  }\n}\n\nfragment ForceCancelRunAlertFragment_run on Run {\n  forceCancelAvailableAt\n  ...ForceCancelRunButtonFragment_run\n}\n\nfragment ForceCancelRunButtonDialogFragment_run on Run {\n  workspace {\n    fullPath\n    id\n  }\n}\n\nfragment ForceCancelRunButtonFragment_run on Run {\n  id\n  ...ForceCancelRunButtonDialogFragment_run\n}\n\nfragment JobLogsFragment_logs on Job {\n  id\n  status\n  logLastUpdatedAt\n  logSize\n  logs(startOffset: 0, limit: 51200)\n}\n\nfragment RunDetailsApplyStageFragment_apply on Run {\n  id\n  status\n  plan {\n    resourceAdditions\n    resourceChanges\n    resourceDestructions\n    status\n    id\n  }\n  apply {\n    metadata {\n      createdAt\n    }\n    status\n    triggeredBy\n    currentJob {\n      id\n      status\n      cancelRequested\n      timestamps {\n        queuedAt\n        pendingAt\n        runningAt\n        finishedAt\n      }\n      ...JobLogsFragment_logs\n    }\n    id\n  }\n  ...RunVariablesFragment_variables\n  ...ForceCancelRunAlertFragment_run\n}\n\nfragment RunDetailsPlanStageFragment_plan on Run {\n  createdBy\n  plan {\n    metadata {\n      createdAt\n    }\n    resourceAdditions\n    resourceChanges\n    resourceDestructions\n    status\n    currentJob {\n      id\n      status\n      cancelRequested\n      timestamps {\n        queuedAt\n        pendingAt\n        runningAt\n        finishedAt\n      }\n      ...JobLogsFragment_logs\n    }\n    id\n  }\n  ...RunVariablesFragment_variables\n  ...ForceCancelRunAlertFragment_run\n}\n\nfragment RunDetailsSidebarFragment_details on Run {\n  id\n  status\n  createdBy\n  isDestroy\n  moduleSource\n  moduleVersion\n  metadata {\n    createdAt\n  }\n  configurationVersion {\n    id\n  }\n  plan {\n    status\n    metadata {\n      createdAt\n    }\n    currentJob {\n      runnerPath\n      cancelRequested\n      id\n    }\n    id\n  }\n  apply {\n    status\n    metadata {\n      createdAt\n    }\n    currentJob {\n      runnerPath\n      cancelRequested\n      id\n    }\n    id\n  }\n}\n\nfragment RunListItemFragment_run on Run {\n  metadata {\n    createdAt\n  }\n  id\n  createdBy\n  status\n  isDestroy\n  plan {\n    status\n    resourceAdditions\n    resourceChanges\n    resourceDestructions\n    id\n  }\n  apply {\n    status\n    id\n  }\n}\n\nfragment RunVariableListItemFragment_variable on RunVariable {\n  key\n  category\n  hcl\n  value\n  namespacePath\n}\n\nfragment RunVariablesFragment_variables on Run {\n  variables {\n    key\n    category\n    namespacePath\n    ...RunVariableListItemFragment_variable\n  }\n}\n"
  }
};
})();

(node as any).hash = "8421413f2910585c22af2595d663ad6c";

export default node;
