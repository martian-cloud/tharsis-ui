/**
 * @generated SignedSource<<141c43a8ce1a46588965e7989b283e61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ServiceAccountListFragment_group$data = {
  readonly fullPath: string;
  readonly " $fragmentType": "ServiceAccountListFragment_group";
};
export type ServiceAccountListFragment_group$key = {
  readonly " $data"?: ServiceAccountListFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"ServiceAccountListFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServiceAccountListFragment_group",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "97ea9da04adba98064e263e323cb6731";

export default node;
