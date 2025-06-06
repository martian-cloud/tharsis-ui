/**
 * @generated SignedSource<<0fb824c51941616e3f2d3a2b26013508>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupDetailsIndexFragment_group$data = {
  readonly descendentGroups: {
    readonly totalCount: number;
  };
  readonly description: string;
  readonly fullPath: string;
  readonly name: string;
  readonly workspaces: {
    readonly totalCount: number;
  };
  readonly " $fragmentSpreads": FragmentRefs<"GroupNotificationPreferenceFragment_group" | "MigrateGroupDialogFragment_group">;
  readonly " $fragmentType": "GroupDetailsIndexFragment_group";
};
export type GroupDetailsIndexFragment_group$key = {
  readonly " $data"?: GroupDetailsIndexFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupDetailsIndexFragment_group">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupDetailsIndexFragment_group",
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "WorkspaceConnection",
      "kind": "LinkedField",
      "name": "workspaces",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "workspaces(first:0)"
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "GroupConnection",
      "kind": "LinkedField",
      "name": "descendentGroups",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "descendentGroups(first:0)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MigrateGroupDialogFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupNotificationPreferenceFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "7daa39a789767b4a84f11ab0ac65d1ac";

export default node;
