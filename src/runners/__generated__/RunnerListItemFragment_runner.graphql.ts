/**
 * @generated SignedSource<<122cf8637d3ee6c64057295727fcf822>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunnerListItemFragment_runner$data = {
  readonly createdBy: string;
  readonly disabled: boolean;
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly name: string;
  readonly " $fragmentType": "RunnerListItemFragment_runner";
};
export type RunnerListItemFragment_runner$key = {
  readonly " $data"?: RunnerListItemFragment_runner$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunnerListItemFragment_runner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunnerListItemFragment_runner",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "disabled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdBy",
      "storageKey": null
    }
  ],
  "type": "Runner",
  "abstractKey": null
};

(node as any).hash = "02d79930862a0472d1556c86f4cd9f7f";

export default node;
