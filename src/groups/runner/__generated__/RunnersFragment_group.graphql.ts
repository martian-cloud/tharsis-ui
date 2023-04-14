/**
 * @generated SignedSource<<30dd1838e0b28ab1df8450a7af8ac41c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunnersFragment_group$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RunnerDetailsFragment_group" | "RunnerListFragment_group">;
  readonly " $fragmentType": "RunnersFragment_group";
};
export type RunnersFragment_group$key = {
  readonly " $data"?: RunnersFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunnersFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunnersFragment_group",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunnerListFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunnerDetailsFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "388d61424996c7b842932f1d95de8aae";

export default node;
