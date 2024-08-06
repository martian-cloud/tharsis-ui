/**
 * @generated SignedSource<<c18d909032f151b71d41ff259c6dfdf0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeWorkspaceListItemFragment_workspace$data = {
  readonly fullPath: string;
  readonly name: string;
  readonly " $fragmentType": "HomeWorkspaceListItemFragment_workspace";
};
export type HomeWorkspaceListItemFragment_workspace$key = {
  readonly " $data"?: HomeWorkspaceListItemFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeWorkspaceListItemFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeWorkspaceListItemFragment_workspace",
  "selections": [
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
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "b38c3aca15f8b5426970dbab1d3476a4";

export default node;
