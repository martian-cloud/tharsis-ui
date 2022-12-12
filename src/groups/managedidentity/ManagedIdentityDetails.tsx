import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LoadingButton } from '@mui/lab';
import { ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, Menu, MenuItem, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import graphql from 'babel-plugin-relay/macro';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay/hooks";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs';
import { GetConnections } from './ManagedIdentityList';
import ManagedIdentityPolicyRules from './rules/ManagedIdentityPolicyRules';
import ManagedIdentityTypeChip from './ManagedIdentityTypeChip';
import { ManagedIdentityDetailsDeleteMutation } from './__generated__/ManagedIdentityDetailsDeleteMutation.graphql';
import { ManagedIdentityDetailsFragment_group$key } from './__generated__/ManagedIdentityDetailsFragment_group.graphql';
import { ManagedIdentityDetailsQuery } from './__generated__/ManagedIdentityDetailsQuery.graphql';

interface Props {
    fragmentRef: ManagedIdentityDetailsFragment_group$key
}

const ISSUER = `https://${process.env['REACT_APP_THARSIS_API_HOST']}${process.env['REACT_APP_THARSIS_API_PORT'] ? `:${process.env['REACT_APP_THARSIS_API_PORT']}` : ''}`;
const HOSTNAME = new URL(ISSUER).hostname;

const FieldLabel = styled(
    Typography
)(() => ({}));

const FieldValue = styled(
    Typography
)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: '16px',
    '&:last-child': {
        marginBottom: 0
    }
}));

function buildPolicy(role: string, sub: string): string {
    const rolePrefix = role.substring(0, role.indexOf(':role/'))
    return `{
        "Effect": "Allow",
        "Principal": {
            "Federated": "${rolePrefix}:oidc-provider/${HOSTNAME}"
        },
        "Action": "sts:AssumeRoleWithWebIdentity",
        "Condition": {
            "StringEquals": {
                "${HOSTNAME}:sub": "${sub}"
            }
        }
}`;
}

interface ConfirmationDialogProps {
    managedIdentityName: string
    deleteInProgress: boolean;
    keepMounted: boolean;
    open: boolean;
    onClose: (confirm?: boolean) => void
}

function DeleteConfirmationDialog(props: ConfirmationDialogProps) {
    const { managedIdentityName, deleteInProgress, onClose, open, ...other } = props;
    return (
        <Dialog
            maxWidth="xs"
            open={open}
            {...other}
        >
            <DialogTitle>Delete Managed Identity</DialogTitle>
            <DialogContent dividers>
                Are you sure you want to delete managed identity <strong>{managedIdentityName}</strong>?
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={() => onClose()}>
                    Cancel
                </Button>
                <LoadingButton color="error" loading={deleteInProgress} onClick={() => onClose(true)}>Delete</LoadingButton>
            </DialogActions>
        </Dialog>
    );
}

function ManagedIdentityDetails(props: Props) {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [menuAnchorEl, setMenuAnchorEl] = useState<Element | null>(null);
    const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = useState<boolean>(false);

    const managedIdentityId = id as string;
    const tab = searchParams.get('tab') || 'details';

    const group = useFragment<ManagedIdentityDetailsFragment_group$key>(
        graphql`
        fragment ManagedIdentityDetailsFragment_group on Group
        {
          id
          fullPath
        }
        `, props.fragmentRef);

    const data = useLazyLoadQuery<ManagedIdentityDetailsQuery>(graphql`
        query ManagedIdentityDetailsQuery($id: String!) {
            managedIdentity(id: $id) {
                id
                name
                description
                type
                data
                accessRules {
                    id
                    runStage
                    allowedUsers {
                        id
                        username
                        email
                    }
                    allowedTeams {
                        id
                        name
                    }
                    allowedServiceAccounts {
                        id
                        name
                        resourcePath
                    }
                }
                ...ManagedIdentityPolicyRulesFragment_managedIdentity
            }
        }
    `, { id: managedIdentityId }, { fetchPolicy: 'store-and-network' });

    const [commit, commitInFlight] = useMutation<ManagedIdentityDetailsDeleteMutation>(graphql`
        mutation ManagedIdentityDetailsDeleteMutation($input: DeleteManagedIdentityInput!, $connections: [ID!]!) {
            deleteManagedIdentity(input: $input) {
                managedIdentity {
                    id @deleteEdge(connections: $connections)
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `);

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        searchParams.set('tab', newValue);
        setSearchParams(searchParams, { replace: true });
    };

    const onDeleteConfirmationDialogClosed = (confirm?: boolean) => {
        if (confirm) {
            commit({
                variables: {
                    input: {
                        id: managedIdentityId
                    },
                    connections: GetConnections(group.id),
                },
                onCompleted: data => {
                    setShowDeleteConfirmationDialog(false);

                    if (data.deleteManagedIdentity.problems.length) {
                        enqueueSnackbar(data.deleteManagedIdentity.problems.map(problem => problem.message).join('; '), { variant: 'warning' });
                    } else {
                        navigate(`..`);
                    }
                },
                onError: error => {
                    setShowDeleteConfirmationDialog(false);
                    enqueueSnackbar(`Unexpected error occurred: ${error.message}`, { variant: 'error' });
                }
            });
        } else {
            setShowDeleteConfirmationDialog(false);
        }
    };

    const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const onMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const onMenuAction = (actionCallback: () => void) => {
        setMenuAnchorEl(null);
        actionCallback();
    };

    if (data.managedIdentity && id) {
        const payload = JSON.parse(atob(data.managedIdentity.data));
        return (
            <Box>
                <NamespaceBreadcrumbs
                    namespacePath={group.fullPath}
                    childRoutes={[
                        { title: "managed identities", path: 'managed_identities' },
                        { title: data.managedIdentity.name, path: id }
                    ]}
                />
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h5" sx={{ marginRight: 1 }}>{data.managedIdentity.name}</Typography>
                            <ManagedIdentityTypeChip type={data.managedIdentity.type} />
                        </Box>
                        <Typography color="textSecondary">{data.managedIdentity.description}</Typography>
                    </Box>
                    <Box>
                        <ButtonGroup variant="outlined" color="primary">
                            <Button onClick={() => navigate('edit')}>Edit</Button>
                            <Button
                                color="primary"
                                size="small"
                                aria-label="more options menu"
                                aria-haspopup="menu"
                                onClick={onOpenMenu}
                            >
                                <ArrowDropDownIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                        <Menu
                            id="managed-identity-more-options-menu"
                            anchorEl={menuAnchorEl}
                            open={Boolean(menuAnchorEl)}
                            onClose={onMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={() => onMenuAction(() => setShowDeleteConfirmationDialog(true))}>
                                Delete Managed Identity
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", border: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={onTabChange}>
                        <Tab label="Details" value="details" />
                        <Tab label="Rules" value="rules" />
                    </Tabs>
                </Box>
                <Box sx={{ border: 1, borderTop: 0, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderColor: 'divider', padding: 2 }}>
                    {tab === 'details' && <Box>
                        {data.managedIdentity.type === 'aws_federated' && <Box>
                            <FieldLabel>IAM Role</FieldLabel>
                            <FieldValue>{payload.role}</FieldValue>
                            <FieldLabel>Audience</FieldLabel>
                            <FieldValue>aws</FieldValue>
                            <FieldLabel>IAM Trust Policy</FieldLabel>
                            <Typography color="textSecondary">Add the trust policy below to the IAM role in order to allow this managed identity to assume it.</Typography>
                            <SyntaxHighlighter wrapLongLines customStyle={{ fontSize: 14 }} language="json" style={prismTheme} children={buildPolicy(payload.role, payload.subject)} />
                        </Box>}
                        {data.managedIdentity.type === 'azure_federated' && <Box>
                            <FieldLabel>Issuer</FieldLabel>
                            <FieldValue>{ISSUER}</FieldValue>
                            <FieldLabel>Client ID</FieldLabel>
                            <FieldValue>{payload.clientId}</FieldValue>
                            <FieldLabel>Tenant ID</FieldLabel>
                            <FieldValue>{payload.tenantId}</FieldValue>
                            <FieldLabel>Audience</FieldLabel>
                            <FieldValue>azure</FieldValue>
                            <FieldLabel>Subject</FieldLabel>
                            <FieldValue>{payload.subject}</FieldValue>
                        </Box>}
                    </Box>}
                    {tab === 'rules' && <Box>

                        <ManagedIdentityPolicyRules
                            fragmentRef={data.managedIdentity}
                            groupPath={group.fullPath}
                        />
                    </Box>}
                </Box>
                <DeleteConfirmationDialog
                    managedIdentityName={data.managedIdentity.name}
                    keepMounted
                    deleteInProgress={commitInFlight}
                    open={showDeleteConfirmationDialog}
                    onClose={onDeleteConfirmationDialogClosed}
                />
            </Box>
        );
    } else {
        return <Box display="flex" justifyContent="center" marginTop={4}>
            <Typography color="textSecondary">Managed identity with ID {managedIdentityId} not found</Typography>
        </Box>;
    }
}

export default ManagedIdentityDetails
