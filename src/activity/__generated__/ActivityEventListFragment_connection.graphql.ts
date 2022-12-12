/**
 * @generated SignedSource<<25dfdf8c352d2c65b8323cfb43338507>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActivityEventListFragment_connection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly target: {
        readonly __typename: string;
      };
      readonly " $fragmentSpreads": FragmentRefs<"ActivityEventGPGKeyTargetFragment_event" | "ActivityEventGroupTargetFragment_event" | "ActivityEventManagedIdentityAccessRuleTargetFragment_event" | "ActivityEventManagedIdentityTargetFragment_event" | "ActivityEventNamespaceMembershipTargetFragment_event" | "ActivityEventRunTargetFragment_event" | "ActivityEventServiceAccountTargetFragment_event" | "ActivityEventStateVersionTargetFragment_event" | "ActivityEventTeamTargetFragment_event" | "ActivityEventTerraformModuleTargetFragment_event" | "ActivityEventTerraformProviderTargetFragment_event" | "ActivityEventVCSProviderTargetFragment_event" | "ActivityEventVariableTargetFragment_event" | "ActivityEventWorkspaceTargetFragment_event">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "ActivityEventListFragment_connection";
};
export type ActivityEventListFragment_connection$key = {
  readonly " $data"?: ActivityEventListFragment_connection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActivityEventListFragment_connection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActivityEventListFragment_connection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ActivityEventEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ActivityEvent",
          "kind": "LinkedField",
          "name": "node",
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "target",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventWorkspaceTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventGroupTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventManagedIdentityTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventNamespaceMembershipTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventGPGKeyTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventManagedIdentityAccessRuleTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventServiceAccountTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventVariableTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventRunTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventStateVersionTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventTeamTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventTerraformProviderTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventTerraformModuleTargetFragment_event"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ActivityEventVCSProviderTargetFragment_event"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ActivityEventConnection",
  "abstractKey": null
};

(node as any).hash = "2af00c69fe6c6e9515524c802301ae8f";

export default node;
