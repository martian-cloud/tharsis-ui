/**
 * @generated SignedSource<<29b4283d3a431e2d889177ee28f22592>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ModuleVersionAutocompleteQuery$variables = {
  moduleName: string;
  registryNamespace: string;
  system: string;
};
export type ModuleVersionAutocompleteQuery$data = {
  readonly terraformModule: {
    readonly versions: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly version: string;
        } | null;
      } | null> | null;
    };
  } | null;
};
export type ModuleVersionAutocompleteQuery = {
  response: ModuleVersionAutocompleteQuery$data;
  variables: ModuleVersionAutocompleteQuery$variables;
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
v3 = [
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
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "version",
  "storageKey": null
},
v6 = {
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ModuleVersionAutocompleteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "TerraformModule",
        "kind": "LinkedField",
        "name": "terraformModule",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "TerraformModuleVersionConnection",
            "kind": "LinkedField",
            "name": "versions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TerraformModuleVersionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TerraformModuleVersion",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "versions(first:20)"
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
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ModuleVersionAutocompleteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "TerraformModule",
        "kind": "LinkedField",
        "name": "terraformModule",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "TerraformModuleVersionConnection",
            "kind": "LinkedField",
            "name": "versions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TerraformModuleVersionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TerraformModuleVersion",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "versions(first:20)"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a7ac388edfffcb7709fbab92675b52e3",
    "id": null,
    "metadata": {},
    "name": "ModuleVersionAutocompleteQuery",
    "operationKind": "query",
    "text": "query ModuleVersionAutocompleteQuery(\n  $registryNamespace: String!\n  $moduleName: String!\n  $system: String!\n) {\n  terraformModule(registryNamespace: $registryNamespace, moduleName: $moduleName, system: $system) {\n    versions(first: 20) {\n      edges {\n        node {\n          version\n          id\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "05b6bf383e837dff9b93414959cff8cb";

export default node;
