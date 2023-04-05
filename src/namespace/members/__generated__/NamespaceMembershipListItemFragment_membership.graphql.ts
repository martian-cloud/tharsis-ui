/**
 * @generated SignedSource<<68c0bb0f0e0bf22100fd4e07d912d62e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NamespaceMembershipListItemFragment_membership$data = {
  readonly id: string;
  readonly member: {
    readonly __typename: "ServiceAccount";
    readonly id: string;
    readonly name: string;
    readonly resourcePath: string;
  } | {
    readonly __typename: "Team";
    readonly id: string;
    readonly name: string;
  } | {
    readonly __typename: "User";
    readonly email: string;
    readonly id: string;
    readonly username: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null;
  readonly metadata: {
    readonly createdAt: any;
    readonly updatedAt: any;
  };
  readonly resourcePath: string;
  readonly role: {
    readonly name: string;
  };
  readonly " $fragmentType": "NamespaceMembershipListItemFragment_membership";
};
export type NamespaceMembershipListItemFragment_membership$key = {
  readonly " $data"?: NamespaceMembershipListItemFragment_membership$data;
  readonly " $fragmentSpreads": FragmentRefs<"NamespaceMembershipListItemFragment_membership">;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourcePath",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NamespaceMembershipListItemFragment_membership",
  "selections": [
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "role",
      "plural": false,
      "selections": [
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "member",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
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
          "type": "User",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "type": "Team",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "type": "ServiceAccount",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NamespaceMembership",
  "abstractKey": null
};
})();

(node as any).hash = "529a49cd5f96f6bef77cacd0ec0b9d64";

export default node;
