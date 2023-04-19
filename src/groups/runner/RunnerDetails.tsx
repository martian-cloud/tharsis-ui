import { useState } from 'react';
import { Box, Collapse, Link, styled, Tab, Tabs, Typography } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';
import { default as ArrowDropDown } from '@mui/icons-material/ArrowDropDown';
import moment from 'moment';
import { useFragment, useLazyLoadQuery } from "react-relay/hooks";
import { useParams, useSearchParams } from 'react-router-dom';
import graphql from 'babel-plugin-relay/macro';
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs';
import AssignedServiceAccountList from './AssignedServiceAccountList';
import { INITIAL_ITEM_COUNT } from './RunnerList';
import { RunnerDetailsQuery } from './__generated__/RunnerDetailsQuery.graphql';
import { RunnerDetailsFragment_group$key } from './__generated__/RunnerDetailsFragment_group.graphql';
import { RunnerIcon } from '../../common/Icons';

interface Props {
    fragmentRef: RunnerDetailsFragment_group$key
}

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

function RunnerDetails({ fragmentRef }: Props) {
    const [showMore, setShowMore] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const { id } = useParams();
    const runnerId = id as string;
    const tab = searchParams.get('tab') || 'Details';

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        searchParams.set('tab', newValue);
        setSearchParams(searchParams, { replace: true });
    };

    const group = useFragment(
        graphql`
        fragment RunnerDetailsFragment_group on Group
        {
          id
          fullPath
        }
        `, fragmentRef);

    const data = useLazyLoadQuery<RunnerDetailsQuery>(graphql`
        query RunnerDetailsQuery($id: String!, $first: Int!, $after: String) {
            node(id: $id) {
                ... on Runner {
                    id
                    name
                    type
                    description
                    createdBy
                    metadata {
                        createdAt
                    }
                    ...AssignedServiceAccountListFragment_assignedServiceAccounts
                }
            }
        }`, { id: runnerId, first: INITIAL_ITEM_COUNT }, { fetchPolicy: 'store-and-network' });

    if (data.node && id) {

        const runner = data.node as any;

        return (
            <Box>
                <NamespaceBreadcrumbs
                    namespacePath={group.fullPath}
                    childRoutes={[
                        { title: "runner agents", path: "runner_agents" },
                        { title: runner.name, path: id }
                    ]} />
                <Box display="flex" alignItems="center" mb={2}>
                    <Box sx={{ margin: 1 }}>
                        <RunnerIcon />
                    </Box>
                    <Box marginLeft={1}>
                        <Typography variant="h5" sx={{ marginRight: 1 }}>{runner.name}</Typography>
                        <Typography color="textSecondary">{runner.description}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", border: 1, borderColor: 'divider', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
                    <Tabs value={tab} onChange={onTabChange}>
                        <Tab label="Details" value="Details" />
                        <Tab label="Assigned Service Accounts" value="Assigned Service Accounts" />
                    </Tabs>
                </Box>
                {tab === 'Details' && <Box sx={{ border: 1, borderTop: 0, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderColor: 'divider', padding: 2 }}>
                    <FieldLabel>Type</FieldLabel>
                    <FieldValue>{runner.type.charAt(0).toUpperCase() + runner.type.slice(1)}</FieldValue>
                    <Box marginTop={4}>
                        <Link
                            sx={{ display: 'flex', alignItems: 'center' }}
                            component="button" variant="body1"
                            color="textSecondary"
                            underline="hover"
                            onClick={() => setShowMore(!showMore)}
                        >
                            More Details {showMore ? <ArrowDropUp /> : <ArrowDropDown />}
                        </Link>
                        <Collapse in={showMore} timeout="auto" unmountOnExit>
                            <Box marginTop={2}>
                                <Typography variant="body2">
                                    Created {moment(runner.metadata.createdAt as moment.MomentInput).fromNow()} by {runner.createdBy}
                                </Typography>
                            </Box>
                        </Collapse>
                    </Box>
                </Box>}
                {tab === 'Assigned Service Accounts' && <AssignedServiceAccountList fragmentRef={runner} />}
            </Box>
        );
    } else {
        return <Box display="flex" justifyContent="center" marginTop={4}>
            <Typography color="textSecondary">Runner Agent with ID {runnerId} not found</Typography>
        </Box>;
    }
}

export default RunnerDetails
