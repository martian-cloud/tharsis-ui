/**
 * @generated SignedSource<<593dafcc218691b67ac657845a93eea9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunnerListFragment_runners$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"RunnerListItemFragment_runner">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "RunnerListFragment_runners";
};
export type RunnerListFragment_runners$key = {
  readonly " $data"?: RunnerListFragment_runners$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunnerListFragment_runners">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunnerListFragment_runners",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RunnerEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Runner",
          "kind": "LinkedField",
          "name": "node",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "RunnerListItemFragment_runner"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RunnerConnection",
  "abstractKey": null
};

(node as any).hash = "0077cc3ac5b986f2285aa34dfeacc20c";

export default node;
