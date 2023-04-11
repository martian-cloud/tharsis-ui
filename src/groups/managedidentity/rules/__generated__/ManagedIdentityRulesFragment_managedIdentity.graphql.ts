/**
 * @generated SignedSource<<9736d8ac21528e47eb83850ad86861f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JobType = "apply" | "plan" | "%future added value";
export type ManagedIdentityAccessRuleType = "eligible_principals" | "module_attestation" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ManagedIdentityRulesFragment_managedIdentity$data = {
  readonly accessRules: ReadonlyArray<{
    readonly allowedServiceAccounts: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
      readonly resourcePath: string;
    }> | null;
    readonly allowedTeams: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }> | null;
    readonly allowedUsers: ReadonlyArray<{
      readonly email: string;
      readonly id: string;
      readonly username: string;
    }> | null;
    readonly id: string;
    readonly moduleAttestationPolicies: ReadonlyArray<{
      readonly predicateType: string | null;
      readonly publicKey: string;
    }> | null;
    readonly runStage: JobType;
    readonly type: ManagedIdentityAccessRuleType;
  }>;
  readonly id: string;
  readonly isAlias: boolean;
  readonly " $fragmentType": "ManagedIdentityRulesFragment_managedIdentity";
};
export type ManagedIdentityRulesFragment_managedIdentity$key = {
  readonly " $data"?: ManagedIdentityRulesFragment_managedIdentity$data;
  readonly " $fragmentSpreads": FragmentRefs<"ManagedIdentityRulesFragment_managedIdentity">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ManagedIdentityRulesFragment_managedIdentity",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAlias",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ManagedIdentityAccessRule",
      "kind": "LinkedField",
      "name": "accessRules",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "runStage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ManagedIdentityAccessRuleModuleAttestationPolicy",
          "kind": "LinkedField",
          "name": "moduleAttestationPolicies",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "publicKey",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "predicateType",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "allowedUsers",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "username",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "email",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Team",
          "kind": "LinkedField",
          "name": "allowedTeams",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ServiceAccount",
          "kind": "LinkedField",
          "name": "allowedServiceAccounts",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "resourcePath",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ManagedIdentity",
  "abstractKey": null
};
})();

(node as any).hash = "e1185cbf499d6a22be1978d304ee0b44";

export default node;
