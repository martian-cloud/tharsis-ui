/**
 * @generated SignedSource<<2616560ef3cafa2576beb74dc85f73f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionAttestListItemFragment_module$data = {
  readonly createdBy: string;
  readonly data: string;
  readonly description: string;
  readonly id: string;
  readonly metadata: {
    readonly createdAt: any;
  };
  readonly predicateType: string;
  readonly " $fragmentType": "TerraformModuleVersionAttestListItemFragment_module";
};
export type TerraformModuleVersionAttestListItemFragment_module$key = {
  readonly " $data"?: TerraformModuleVersionAttestListItemFragment_module$data;
  readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionAttestListItemFragment_module">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TerraformModuleVersionAttestListItemFragment_module",
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "predicateType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "data",
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
      "kind": "ScalarField",
      "name": "createdBy",
      "storageKey": null
    }
  ],
  "type": "TerraformModuleAttestation",
  "abstractKey": null
};

(node as any).hash = "f40f757c56b50a0b0b23878ed9b397ec";

export default node;
