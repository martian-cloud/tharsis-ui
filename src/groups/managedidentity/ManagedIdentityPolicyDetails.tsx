import { Avatar, Box, Chip, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import teal from '@mui/material/colors/teal';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import Gravatar from '../../common/Gravatar';
import { ManagedIdentityPolicyDetailsFragment_managedIdentity$key } from './__generated__/ManagedIdentityPolicyDetailsFragment_managedIdentity.graphql';

interface Props {
    fragmentRef: ManagedIdentityPolicyDetailsFragment_managedIdentity$key
}

const AvatarContainer = styled(
    Box
)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -4px',
    '& > *': {
        margin: '4px'
    }
}));

const StyledAvatar = styled(
    Avatar
)(() => ({
    width: 24,
    height: 24,
    marginRight: 1,
    backgroundColor: teal[200],
}))

const StyledTableRow = styled(
    TableRow
)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))

function buildPrincipals(rule: any) {
    return [
        ...rule.allowedUsers.map((user: any) => ({ id: user.id, type: 'user', label: user.email, tooltip: user.email })),
        ...rule.allowedTeams.map((team: any) => ({ id: team.id, type: 'team', label: team.name[0].toUpperCase(), tooltip: team.name })),
        ...rule.allowedServiceAccounts.map((sa: any) => ({ id: sa.id, type: 'serviceaccount', label: sa.resourcePath[0].toUpperCase(), tooltip: sa.resourcePath }))
    ];
}

function ManagedIdentityPolicyDetails(props: Props) {

    const data = useFragment<ManagedIdentityPolicyDetailsFragment_managedIdentity$key>(
        graphql`
        fragment ManagedIdentityPolicyDetailsFragment_managedIdentity on ManagedIdentity {
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
                    resourcePath
                }
            }
        }
        `, props.fragmentRef);

    const planRule = data.accessRules.find(rule => rule.runStage === 'plan');
    const applyRule = data.accessRules.find(rule => rule.runStage === 'apply');

    const policyRules = {
        plan: { type: 'Eligible Principals', runStage: 'plan', principals: planRule ? buildPrincipals(planRule) : undefined },
        apply: { type: 'Eligible Principals', runStage: 'apply', principals: applyRule ? buildPrincipals(applyRule) : undefined },
    };

    const rows = Object.keys(policyRules).map(key => policyRules[key as keyof typeof policyRules]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Principals</TableCell>
                        <TableCell>Run Stage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{rows.map((row: any) => (
                    <StyledTableRow key={row.runStage}>
                        <TableCell>
                            <Typography>{row.type}</Typography>
                        </TableCell>
                        <TableCell>
                            {!row.principals && <Typography>All</Typography>}
                            {row.principals && row.principals.length === 0 && <Typography>None</Typography>}
                            {row.principals && row.principals.length > 0 &&
                                <AvatarContainer>
                                    {row.principals.map(((rule: any) => (
                                        <Tooltip key={rule.id} title={rule.tooltip}>
                                            <Box>
                                                {rule.type === 'user' && <Gravatar width={24} height={24} email={rule.label} />}
                                                {rule.type !== 'user' && <StyledAvatar>{rule.label}</StyledAvatar>}
                                            </Box>
                                        </Tooltip>
                                    )))}
                                </AvatarContainer>}
                        </TableCell>
                        <TableCell>
                            <Chip variant="outlined" size="small" label={row.runStage} />
                        </TableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ManagedIdentityPolicyDetails
