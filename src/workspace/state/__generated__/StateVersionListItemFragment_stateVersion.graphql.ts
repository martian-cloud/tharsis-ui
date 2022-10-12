/**
 * @generated SignedSource<<b70e926b2775e333920cb0cd52115574>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StateVersionListItemFragment_stateVersion$data = {
  readonly createdBy: string;
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly run: {
    readonly createdBy: string;
    readonly id: string;
  } | null;
  readonly " $fragmentType": "StateVersionListItemFragment_stateVersion";
};
export type StateVersionListItemFragment_stateVersion$key = {
  readonly " $data"?: StateVersionListItemFragment_stateVersion$data;
  readonly " $fragmentSpreads": FragmentRefs<"StateVersionListItemFragment_stateVersion">;
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
  "name": "createdBy",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StateVersionListItemFragment_stateVersion",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "concreteType": "Run",
      "kind": "LinkedField",
      "name": "run",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "StateVersion",
  "abstractKey": null
};
})();

(node as any).hash = "6e8e52b3f11812c89c8f876a2e2c95c6";

export default node;
