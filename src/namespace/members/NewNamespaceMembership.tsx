import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { darken } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import graphql from 'babel-plugin-relay/macro';
import React, { useState } from 'react';
import { useFragment, useMutation } from "react-relay/hooks";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { MutationError } from '../../common/error';
import NamespaceBreadcrumbs from '../NamespaceBreadcrumbs';
import ServiceAccountAutocomplete, { ServiceAccountOption } from './ServiceAccountAutocomplete';
import TeamAutocomplete, { TeamOption } from './TeamAutocomplete';
import UserAutocomplete, { UserOption } from './UserAutocomplete';
import RoleAutocomplete, { RoleOption } from './RoleAutocomplete';
import { NewNamespaceMembershipCreateNamespaceMembershipMutation } from './__generated__/NewNamespaceMembershipCreateNamespaceMembershipMutation.graphql';
import { NewNamespaceMembershipFragment_memberships$key } from './__generated__/NewNamespaceMembershipFragment_memberships.graphql';

interface MemberTypeButtonProps {
    selected?: boolean
    disabled?: boolean
}

const MemberTypeButton = styled(
    'div',
    { shouldForwardProp: (prop) => !['selected', 'disabled'].includes(prop.toString()) }
)<MemberTypeButtonProps>(({ theme, selected, disabled }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 300,
    ...(selected && {
        borderColor: theme.palette.primary.main,
        backgroundColor: darken(theme.palette.primary.main, 0.8)
    }),
    ...(!disabled && {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: darken(theme.palette.primary.main, 0.8)
        },
    })
}));

const MemberTypes = [
    { name: 'user', title: 'User', description: 'A user represents a human identity' },
    { name: 'team', title: 'Team', description: 'A team is a collection of users' },
    { name: 'serviceAccount', title: 'Service Account', description: 'A service account represents a machine identity' }
];

interface Props {
    fragmentRef: NewNamespaceMembershipFragment_memberships$key
}

function NewNamespaceMembership(props: Props) {
    const navigate = useNavigate();
    const [error, setError] = React.useState<MutationError>()

    const [memberType, setMemberType] = useState('');
    const [role, setRole] = useState<string | undefined>();
    const [member, setMember] = useState<string | undefined>();

    const data = useFragment<NewNamespaceMembershipFragment_memberships$key>(
        graphql`
        fragment NewNamespaceMembershipFragment_memberships on Namespace
        {
            fullPath
        }
      `, props.fragmentRef);

    const [commit, isInFlight] = useMutation<NewNamespaceMembershipCreateNamespaceMembershipMutation>(graphql`
        mutation NewNamespaceMembershipCreateNamespaceMembershipMutation($input: CreateNamespaceMembershipInput!) {
            createNamespaceMembership(input: $input) {
                namespace {
                    memberships {
                        ...NamespaceMembershipListItemFragment_membership
                    }
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `);

    const onTypeChange = (type: string) => {
        if (type !== memberType) {
            setMemberType(type);
            setMember(undefined);
        }
    };

    const onRoleChange = (role: RoleOption | null) => {
        setRole(role?.name);
    };

    const onUserChange = (user: UserOption | null) => {
        setMember(user?.username);
    };

    const onTeamChange = (team: TeamOption | null) => {
        setMember(team?.name);
    };

    const onServiceAccountChange = (serviceAccount: ServiceAccountOption | null) => {
        setMember(serviceAccount?.id);
    };

    const onCreate = () => {
        if (member && role) {
            const input = {
                namespacePath: data.fullPath,
                role: role
            } as any;
            if (memberType === 'user') {
                input.username = member;
            } else if (memberType === 'serviceAccount') {
                input.serviceAccountId = member;
            } else if (memberType === 'team') {
                input.teamName = member;
            } else {
                throw new Error(`Invalid member type ${memberType}`);
            }

            commit({
                variables: {
                    input
                },
                onCompleted: data => {
                    if (data.createNamespaceMembership.problems.length) {
                        setError({
                            severity: 'warning',
                            message: data.createNamespaceMembership.problems.map(problem => problem.message).join('; ')
                        });
                    } else {
                        navigate(`..`);
                    }
                },
                onError: error => {
                    setError({
                        severity: 'error',
                        message: `Unexpected Error Occurred: ${error.message}`
                    });
                }
            });
        }
    };

    return (
        <Box>
            <NamespaceBreadcrumbs
                namespacePath={data.fullPath}
                childRoutes={[
                    { title: "members", path: 'members' },
                    { title: "new", path: 'new' }
                ]}
            />
            <Typography variant="h5">Add Member</Typography>
            {error && <Alert sx={{ marginTop: 2 }} severity={error.severity}>
                <Typography>{error.message}</Typography>
            </Alert>}
            <Box marginTop={2} marginBottom={2}>
                <Typography variant="subtitle1" gutterBottom>Select a Member Type</Typography>
                <Divider light />
                <Stack marginTop={2} direction="row" spacing={2}>
                    {MemberTypes.map(type => <MemberTypeButton
                        key={type.name}
                        selected={type.name === memberType}
                        onClick={() => onTypeChange(type.name)}
                    >
                        <Typography variant="subtitle1">{type.title}</Typography>
                        <Typography variant="caption" align="center">
                            {type.description}
                        </Typography>
                    </MemberTypeButton>)}
                </Stack>
            </Box>
            {!!memberType && <React.Fragment>
                <Typography variant="subtitle1" gutterBottom>Details</Typography>
                <Divider light />
                <Box marginTop={2} marginBottom={2}>
                    {memberType === 'user' && <Box marginBottom={2}>
                        <Typography gutterBottom color="textSecondary">User</Typography>
                        <UserAutocomplete onSelected={onUserChange} />
                    </Box>}
                    {memberType === 'team' && <Box marginBottom={2}>
                        <Typography gutterBottom color="textSecondary">Team</Typography>
                        <TeamAutocomplete onSelected={onTeamChange} />
                    </Box>}
                    {memberType === 'serviceAccount' && <Box marginBottom={2}>
                        <Typography gutterBottom color="textSecondary">Service Account</Typography>
                        <ServiceAccountAutocomplete namespacePath={data.fullPath} onSelected={onServiceAccountChange} />
                    </Box>}
                    <Box marginBottom={2}>
                        <Typography gutterBottom color="textSecondary">Role</Typography>
                        <RoleAutocomplete onSelected={onRoleChange} />
                    </Box>
                </Box>
                <Divider light />
                <Box marginTop={2}>
                    <LoadingButton
                        loading={isInFlight}
                        disabled={!member || !role}
                        variant="outlined"
                        color="primary"
                        sx={{ marginRight: 2 }}
                        onClick={onCreate}>
                        Add Member
                    </LoadingButton>
                    <Button component={RouterLink} color="inherit" to="..">Cancel</Button>
                </Box>
            </React.Fragment>}
        </Box >
    );
}

export default NewNamespaceMembership;
