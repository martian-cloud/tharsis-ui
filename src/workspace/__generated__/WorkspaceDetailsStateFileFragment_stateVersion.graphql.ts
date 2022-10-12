/**
 * @generated SignedSource<<f7c7080f86ed94c6e59fa321baf69f81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkspaceDetailsStateFileFragment_stateVersion$data = {
  readonly data: string;
  readonly id: string;
  readonly " $fragmentType": "WorkspaceDetailsStateFileFragment_stateVersion";
};
export type WorkspaceDetailsStateFileFragment_stateVersion$key = {
  readonly " $data"?: WorkspaceDetailsStateFileFragment_stateVersion$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkspaceDetailsStateFileFragment_stateVersion">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkspaceDetailsStateFileFragment_stateVersion",
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
      "name": "data",
      "storageKey": null
    }
  ],
  "type": "StateVersion",
  "abstractKey": null
};

(node as any).hash = "37d32290556edec764c425b27cf3e3ef";

export default node;
