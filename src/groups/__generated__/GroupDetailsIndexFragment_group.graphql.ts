/**
 * @generated SignedSource<<c9b2f255917f8d9b38db3525ec9ad7de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
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
    }
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "c971ddbaf66b4e011fde82d7f8e6dca2";

export default node;
