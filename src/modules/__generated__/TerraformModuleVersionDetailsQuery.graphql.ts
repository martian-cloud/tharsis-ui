/**
 * @generated SignedSource<<80ae162f94291ade33d5f16765df30c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TerraformModuleVersionDetailsQuery$variables = {
  moduleName: string;
  registryNamespace: string;
  system: string;
  version?: string | null;
};
export type TerraformModuleVersionDetailsQuery$data = {
  readonly terraformModuleVersion: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TerraformModuleVersionDetailsIndexFragment_details">;
  } | null;
};
export type TerraformModuleVersionDetailsQuery = {
  response: TerraformModuleVersionDetailsQuery$data;
  variables: TerraformModuleVersionDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "moduleName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "registryNamespace"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "system"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "version"
},
v4 = [
  {
    "kind": "Variable",
    "name": "moduleName",
    "variableName": "moduleName"
  },
  {
    "kind": "Variable",
    "name": "registryNamespace",
    "variableName": "registryNamespace"
  },
  {
    "kind": "Variable",
    "name": "system",
    "variableName": "system"
  },
  {
    "kind": "Variable",
    "name": "version",
    "variableName": "version"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TerraformModuleVersionDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "TerraformModuleVersion",
        "kind": "LinkedField",
        "name": "terraformModuleVersion",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TerraformModuleVersionDetailsIndexFragment_details"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "TerraformModuleVersionDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "TerraformModuleVersion",
        "kind": "LinkedField",
        "name": "terraformModuleVersion",
        "plural": false,
        "selections": [
          (v5/*: any*/),
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
            "name": "status",
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
              (v5/*: any*/),
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
                "name": "source",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89d6c1d6efbb204304387320bd5be093",
    "id": null,
    "metadata": {},
    "name": "TerraformModuleVersionDetailsQuery",
    "operationKind": "query",
    "text": "query TerraformModuleVersionDetailsQuery(\n  $registryNamespace: String!\n  $moduleName: String!\n  $system: String!\n  $version: String\n) {\n  terraformModuleVersion(registryNamespace: $registryNamespace, moduleName: $moduleName, system: $system, version: $version) {\n    id\n    ...TerraformModuleVersionDetailsIndexFragment_details\n  }\n}\n\nfragment TerraformModuleVersionDetailsIndexFragment_details on TerraformModuleVersion {\n  id\n  version\n  status\n  module {\n    id\n    name\n    source\n    system\n    registryNamespace\n    private\n    ...TerraformModuleVersionListFragment_module\n  }\n  ...TerraformModuleVersionDetailsSidebarFragment_details\n}\n\nfragment TerraformModuleVersionDetailsSidebarFragment_details on TerraformModuleVersion {\n  version\n  createdBy\n  latest\n  metadata {\n    createdAt\n  }\n  module {\n    id\n    name\n    system\n    registryNamespace\n    private\n    repositoryUrl\n  }\n}\n\nfragment TerraformModuleVersionListFragment_module on TerraformModule {\n  id\n}\n"
  }
};
})();

(node as any).hash = "8a74cd87b33657ba6067406b32ebcc96";

export default node;
