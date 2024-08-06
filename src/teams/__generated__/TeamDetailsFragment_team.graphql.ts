/**
 * @generated SignedSource<<6c3e333e8df2b3f067faa2d8f667470d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
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
