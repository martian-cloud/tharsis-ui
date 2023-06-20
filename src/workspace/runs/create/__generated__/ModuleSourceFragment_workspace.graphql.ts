/**
 * @generated SignedSource<<54c9766d2b9209be3158a35978543a32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModuleSourceFragment_workspace$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "ModuleSourceFragment_workspace";
};
export type ModuleSourceFragment_workspace$key = {
  readonly " $data"?: ModuleSourceFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"ModuleSourceFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModuleSourceFragment_workspace",
  "selections": [
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

(node as any).hash = "883f6cbb4125c8f75a08edc5d1855874";

export default node;
