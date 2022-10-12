/**
 * @generated SignedSource<<682447ffa97f9bb733bc64e73b30e718>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JobLogsFragment_logs$data = {
  readonly id: string;
  readonly logLastUpdatedAt: any | null;
  readonly logSize: number;
  readonly logs: string;
  readonly status: string;
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
          "value": 1024000
        },
        {
          "kind": "Literal",
          "name": "startOffset",
          "value": 0
        }
      ],
      "kind": "ScalarField",
      "name": "logs",
      "storageKey": "logs(limit:1024000,startOffset:0)"
    }
  ],
  "type": "Job",
  "abstractKey": null
};

(node as any).hash = "403c0c04b49ffe4c622dde65f45f33a7";

export default node;
