import DeleteIcon from '@mui/icons-material/CloseOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import { Avatar, Box, Button, Chip, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import teal from '@mui/material/colors/teal';
import { useEffect, useState } from 'react';
import Gravatar from '../../../common/Gravatar';

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
}));

const StyledTableRow = styled(
    TableRow
)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function buildPrincipals(rule: any) {
    return [
        ...rule.allowedUsers.map((user: any) => ({ id: user.id, type: 'user', label: user.email, tooltip: user.email, name: user.username })),
        ...rule.allowedTeams.map((team: any) => ({ id: team.id, type: 'team', label: team.name[0].toUpperCase(), tooltip: team.name, name: team.name })),
        ...rule.allowedServiceAccounts.map((sa: any) => ({ id: sa.id, type: 'serviceaccount', label: sa.name[0].toUpperCase(), tooltip: sa.resourcePath, name: sa.resourcePath }))
    ];
}

interface Props {
    accessRules: any;
    onEdit: (rule: any) => void;
    onDelete: (rule: any) => void;
}

function ManagedIdentityPolicyRulesList(props: Props) {
    const { accessRules, onEdit, onDelete } = props;

    const [rows, setRows] = useState<any>();

    useEffect(() => {
        setRows(accessRules.map((rule: any) => ({
            type: 'Eligible Principals',
            principals: buildPrincipals(rule),
            rule: rule
        })));
    }, [accessRules]);

    return rows ? (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Principals</TableCell>
                        <TableCell>Run Stage</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <StyledTableRow key={row.rule.runStage}>
                            <TableCell>
                                <Typography>{row.type}</Typography>
                            </TableCell>
                            <TableCell>
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
                                <Chip label={`${row.rule.runStage[0].toUpperCase()}${row.rule.runStage.slice(1)}`} />
                            </TableCell>
                            <TableCell>
                                <Button sx={{ marginRight: 1, minWidth: 40, padding: '2px' }} size="small" color="info" variant="outlined" onClick={() => onEdit(row.rule)}>
                                    <EditIcon />
                                </Button>
                                <Button sx={{ minWidth: 40, padding: '2px' }} size="small" color="info" variant="outlined" onClick={() => onDelete(row.rule)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    ) : null;
}

export default ManagedIdentityPolicyRulesList;
