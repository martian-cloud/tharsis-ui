/**
 * @generated SignedSource<<33da98d5336225a4b9563c2c6700409f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionDetailsSidebarFragment_details$data = {
  readonly createdBy: string;
  readonly latest: boolean;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly module: {
    readonly id: string;
    readonly name: string;
    readonly private: boolean;
    readonly registryNamespace: string;
    readonly repositoryUrl: string;
    readonly system: string;
  };
  readonly version: string;
  readonly " $fragmentType": "TerraformModuleVersionDetailsSidebarFragment_details";
};
export type TerraformModuleVersionDetailsSidebarFragment_details$key = {
  readonly " $data"?: TerraformModuleVersionDetailsSidebarFragment_details$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionDetailsSidebarFragment_details">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TerraformModuleVersionDetailsSidebarFragment_details",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "version",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdBy",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "latest",
      "storageKey": null
    },
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
      "concreteType": "TerraformModule",
      "kind": "LinkedField",
      "name": "module",
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
          "name": "system",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "registryNamespace",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "private",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "repositoryUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TerraformModuleVersion",
  "abstractKey": null
};

(node as any).hash = "2667611636211b9bbf86df3449fb3ac2";

export default node;
