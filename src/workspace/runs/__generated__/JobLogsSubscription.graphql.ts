/**
 * @generated SignedSource<<f5232336ff532b74b03591595dee6591>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type JobLogSubscriptionInput = {
  jobId: string;
  lastSeenLogSize?: number | null;
};
export type JobLogsSubscription$variables = {
  input: JobLogSubscriptionInput;
};
export type JobLogsSubscription$data = {
  readonly jobLogEvents: {
    readonly action: string;
    readonly size: number;
  };
};
export type JobLogsSubscription = {
  response: JobLogsSubscription$data;
  variables: JobLogsSubscription$variables;
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
    "concreteType": "JobLogEvent",
    "kind": "LinkedField",
    "name": "jobLogEvents",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "action",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "size",
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
    "name": "JobLogsSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobLogsSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2a096b6b8b6756437fbb6c5a61dbfb8d",
    "id": null,
    "metadata": {},
    "name": "JobLogsSubscription",
    "operationKind": "subscription",
    "text": "subscription JobLogsSubscription(\n  $input: JobLogSubscriptionInput!\n) {\n  jobLogEvents(input: $input) {\n    action\n    size\n  }\n}\n"
  }
};
})();

(node as any).hash = "819a69e3d4664f32ec3cf8aacce6bb94";

export default node;
