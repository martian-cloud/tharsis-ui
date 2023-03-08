/**
 * @generated SignedSource<<2d3fede6089af952d0485590439ef51c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VCSProvidersFragment_group$data = {
  readonly " $fragmentSpreads": FragmentRefs<"EditVCSProviderFragment_group" | "EditVCSProviderOAuthCredentialsFragment_group" | "NewVCSProviderFragment_group" | "VCSProviderDetailsFragment_group" | "VCSProviderListFragment_group">;
  readonly " $fragmentType": "VCSProvidersFragment_group";
};
export type VCSProvidersFragment_group$key = {
  readonly " $data"?: VCSProvidersFragment_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"VCSProvidersFragment_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VCSProvidersFragment_group",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VCSProviderListFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NewVCSProviderFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditVCSProviderFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VCSProviderDetailsFragment_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditVCSProviderOAuthCredentialsFragment_group"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "709ba05866b78f2dc403b8822998c644";

export default node;
