/**
 * @generated SignedSource<<da82e3fa5308affa64ccddcbdbaff044>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserPreferencesFragment_preferences$data = {
  readonly userPreferences: {
    readonly globalPreferences: {
      readonly " $fragmentSpreads": FragmentRefs<"GlobalNotificationPreferenceFragment_notificationPreference">;
    };
  };
  readonly " $fragmentType": "UserPreferencesFragment_preferences";
};
export type UserPreferencesFragment_preferences$key = {
  readonly " $data"?: UserPreferencesFragment_preferences$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserPreferencesFragment_preferences">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserPreferencesFragment_preferences",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserPreferences",
      "kind": "LinkedField",
      "name": "userPreferences",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GlobalUserPreferences",
          "kind": "LinkedField",
          "name": "globalPreferences",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "GlobalNotificationPreferenceFragment_notificationPreference"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "56858f470cedec16f9fd5db9798432e1";

export default node;
