/**
 * @generated SignedSource<<80bc454a10d5d2b8b26a9fb13b75eae5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JobStatus = "finished" | "pending" | "queued" | "running" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JobLogsFragment_logs$data = {
  readonly id: string;
  readonly logLastUpdatedAt: any | null;
  readonly logSize: number;
  readonly logs: string;
  readonly status: JobStatus;
  readonly " $fragmentType": "JobLogsFragment_logs";
};
export type JobLogsFragment_logs$key = {
  readonly " $data"?: JobLogsFragment_logs$data;
  readonly " $fragmentSpreads": FragmentRefs<"JobLogsFragment_logs">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobLogsFragment_logs",
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
      "name": "status",
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
  "type": "Job",
  "abstractKey": null
};

(node as any).hash = "777170e3cffb3dc5354967cded3ea59d";

export default node;
