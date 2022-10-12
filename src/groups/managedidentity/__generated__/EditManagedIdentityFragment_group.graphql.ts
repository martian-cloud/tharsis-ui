/**
 * @generated SignedSource<<1df65a57b15365fefd06a71a5cc99726>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditManagedIdentityFragment_group$data = {
  readonly fullPath: string;
  readonly id: string;
  readonly " $fragmentType": "EditManagedIdentityFragment_group";
};
export type EditManagedIdentityFragment_group$key = {
  readonly " $data"?: EditManagedIdentityFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditManagedIdentityFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditManagedIdentityFragment_group",
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
      "name": "fullPath",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "bb32e6f78b76d598ef741f1aeb56f4e8";

export default node;
