/**
 * @generated SignedSource<<502a011c7b88f6ac443c90d13ca22deb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ApplyStatus = "canceled" | "created" | "errored" | "finished" | "pending" | "queued" | "running" | "%future added value";
export type JobStatus = "finished" | "pending" | "queued" | "running" | "%future added value";
export type PlanStatus = "canceled" | "errored" | "finished" | "pending" | "queued" | "running" | "%future added value";
export type RunStatus = "applied" | "apply_queued" | "applying" | "canceled" | "errored" | "pending" | "plan_queued" | "planned" | "planned_and_finished" | "planning" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RunDetailsApplyStageFragment_apply$data = {
  readonly apply: {
    readonly currentJob: {
      readonly cancelRequested: boolean;
      readonly id: string;
      readonly status: JobStatus;
      readonly timestamps: {
        readonly finishedAt: any | null;
        readonly pendingAt: any | null;
        readonly queuedAt: any | null;
        readonly runningAt: any | null;
      };
      readonly " $fragmentSpreads": FragmentRefs<"JobLogsFragment_logs">;
    } | null;
    readonly metadata: {
      readonly createdAt: any;
    };
    readonly status: ApplyStatus;
    readonly triggeredBy: string | null;
  } | null;
  readonly id: string;
  readonly plan: {
    readonly status: PlanStatus;
    readonly summary: {
      readonly resourceAdditions: number;
      readonly resourceChanges: number;
      readonly resourceDestructions: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"RunDetailsPlanSummaryFragment_plan">;
  };
  readonly status: RunStatus;
  readonly " $fragmentSpreads": FragmentRefs<"ForceCancelRunAlertFragment_run" | "RunVariablesFragment_variables">;
  readonly " $fragmentType": "RunDetailsApplyStageFragment_apply";
};
export type RunDetailsApplyStageFragment_apply$key = {
  readonly " $data"?: RunDetailsApplyStageFragment_apply$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunDetailsApplyStageFragment_apply">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunDetailsApplyStageFragment_apply",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Plan",
      "kind": "LinkedField",
      "name": "plan",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PlanSummary",
          "kind": "LinkedField",
          "name": "summary",
          "plural": false,
          "selections": [
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
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RunDetailsPlanSummaryFragment_plan"
        }
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
              "name": "createdAt",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "triggeredBy",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Job",
          "kind": "LinkedField",
          "name": "currentJob",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cancelRequested",
              "storageKey": null
            },
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "JobLogsFragment_logs"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunVariablesFragment_variables"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ForceCancelRunAlertFragment_run"
    }
  ],
  "type": "Run",
  "abstractKey": null
};
})();

(node as any).hash = "9365489486735b9632e4947b7459f20b";

export default node;
