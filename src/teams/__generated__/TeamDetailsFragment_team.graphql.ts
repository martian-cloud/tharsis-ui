/**
 * @generated SignedSource<<ef5fdee3ab05d7b17ef48d52fd9fa66b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TeamDetailsFragment_team$data = {
  readonly description: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"TeamMemberListFragment_members">;
  readonly " $fragmentType": "TeamDetailsFragment_team";
};
export type TeamDetailsFragment_team$key = {
  readonly " $data"?: TeamDetailsFragment_team$data;
  readonly " $fragmentSpreads": FragmentRefs<"TeamDetailsFragment_team">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TeamDetailsFragment_team",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "TeamMemberListFragment_members"
    }
  ],
  "type": "Team",
  "abstractKey": null
};

(node as any).hash = "f9de68bcce73ee067700d1ed90ccf463";

export default node;
