/**
 * @generated SignedSource<<8e46a27cb32f1c4e3df010a457e28cd5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JobStatus = "finished" | "pending" | "queued" | "running" | "%future added value";
export type RunnerType = "group" | "shared" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type RunJobDialog_currentJob$data = {
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly runner: {
    readonly groupPath: string;
    readonly id: string;
    readonly name: string;
    readonly type: RunnerType;
  } | null;
  readonly runnerPath: string | null;
  readonly status: JobStatus;
  readonly tags: ReadonlyArray<string>;
  readonly timestamps: {
    readonly finishedAt: any | null;
    readonly pendingAt: any | null;
    readonly runningAt: any | null;
  };
  readonly " $fragmentType": "RunJobDialog_currentJob";
};
export type RunJobDialog_currentJob$key = {
  readonly " $data"?: RunJobDialog_currentJob$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunJobDialog_currentJob">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunJobDialog_currentJob",
  "selections": [
    (v0/*: any*/),
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
      "name": "tags",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Runner",
      "kind": "LinkedField",
      "name": "runner",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
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
      "kind": "ScalarField",
      "name": "runnerPath",
      "storageKey": null
    },
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
    }
  ],
  "type": "Job",
  "abstractKey": null
};
})();

(node as any).hash = "067288954a95824991c9189502079a94";

export default node;
