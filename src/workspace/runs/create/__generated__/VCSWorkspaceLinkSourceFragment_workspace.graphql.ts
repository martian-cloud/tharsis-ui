/**
 * @generated SignedSource<<1b0b1077466a692006806a89e38aea00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VCSWorkspaceLinkSourceFragment_workspace$data = {
  readonly workspaceVcsProviderLink: {
    readonly branch: string;
  } | null;
  readonly " $fragmentType": "VCSWorkspaceLinkSourceFragment_workspace";
};
export type VCSWorkspaceLinkSourceFragment_workspace$key = {
  readonly " $data"?: VCSWorkspaceLinkSourceFragment_workspace$data;
  readonly " $fragmentSpreads": FragmentRefs<"VCSWorkspaceLinkSourceFragment_workspace">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VCSWorkspaceLinkSourceFragment_workspace",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "WorkspaceVCSProviderLink",
      "kind": "LinkedField",
      "name": "workspaceVcsProviderLink",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "branch",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Workspace",
  "abstractKey": null
};

(node as any).hash = "bff6f050d30f3c4a9900370b94732fbf";

export default node;
