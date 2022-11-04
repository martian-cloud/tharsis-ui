import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import { ManagedIdentityIcon } from '../../common/Icons';
import ActivityEventLink from '../ActivityEventLink';
import ActivityEventListItem from '../ActivityEventListItem';
import { ActivityEventManagedIdentityTargetFragment_event$key } from './__generated__/ActivityEventManagedIdentityTargetFragment_event.graphql';

const ACTION_TEXT = {
    ADD: 'assigned to',
    CREATE: 'created',
    REMOVE: 'unassigned from',
    UPDATE: 'updated',
} as any;

interface Props {
    fragmentRef: ActivityEventManagedIdentityTargetFragment_event$key
}

function ActivityEventManagedIdentityTarget({ fragmentRef }: Props) {
    const data = useFragment<ActivityEventManagedIdentityTargetFragment_event$key>(
        graphql`
        fragment ActivityEventManagedIdentityTargetFragment_event on ActivityEvent
        {
            action
            namespacePath
            target {
                ...on ManagedIdentity {
                    id
                    name
                    description
                    resourcePath
                }
            }
            ...ActivityEventListItemFragment_event
        }
      `, fragmentRef);

    const actionText = ACTION_TEXT[data.action];
    const managedIdentity = data.target as any;

    let primary;
    switch (data.action) {
        case 'CREATE':
        case 'UPDATE':
            primary = <React.Fragment>
                Managed identity <ActivityEventLink to={`/groups/${data.namespacePath}/-/managed_identities/${managedIdentity.id}`}>{managedIdentity.name}</ActivityEventLink> {actionText} in group <ActivityEventLink to={`/groups/${data.namespacePath}`}>{data.namespacePath}</ActivityEventLink>
            </React.Fragment>;
            break;
        case 'ADD':
        case 'REMOVE':
            primary = <React.Fragment>
                Managed identity <ActivityEventLink to={`/groups/${data.namespacePath}/-/managed_identities/${managedIdentity.id}`}>{managedIdentity.name}</ActivityEventLink> {actionText} workspace <ActivityEventLink to={`/groups/${data.namespacePath}`}>{data.namespacePath}</ActivityEventLink>
            </React.Fragment>
            break;
        case 'DELETE_CHILD_RESOURCE':
            primary = <React.Fragment>
                Managed identity access rule removed from managed identity <ActivityEventLink to={`/groups/${data.namespacePath}/-/managed_identities/${managedIdentity.id}`}>{managedIdentity.name}</ActivityEventLink>
            </React.Fragment>
            break;
    }

    return (
        <ActivityEventListItem
            fragmentRef={data}
            icon={<ManagedIdentityIcon />}
            primary={primary}
        />
    );
}

export default ActivityEventManagedIdentityTarget;
