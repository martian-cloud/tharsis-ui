/**
 * @generated SignedSource<<3026a512909b2f5987d2f298a777a08c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MaxJobDurationSettingFragment_workspace$data = {
  readonly maxJobDuration: number;
  readonly " $fragmentType": "MaxJobDurationSettingFragment_workspace";
};
export type MaxJobDurationSettingFragment_workspace$key = {
  readonly " $data"?: MaxJobDurationSettingFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"MaxJobDurationSettingFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MaxJobDurationSettingFragment_workspace",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maxJobDuration",
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "024d03edfa7416a0472e80efe6224cf4";

export default node;
