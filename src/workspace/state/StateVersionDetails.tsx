import { Box, Typography, Tooltip } from '@mui/material'
import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useParams } from 'react-router-dom';
import { useFragment, useLazyLoadQuery } from 'react-relay'
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import moment from 'moment'
import Gravatar from '../../common/Gravatar'
import { StateVersionDetailsFragment_details$key } from './__generated__/StateVersionDetailsFragment_details.graphql'
import { StateVersionDetailsQuery } from './__generated__/StateVersionDetailsQuery.graphql'

interface Props {
    fragmentRef: StateVersionDetailsFragment_details$key
}

function StateVersionDetails(props: Props) {
    const params = useParams();
    const stateVersionId = params.id as string;

    const data = useFragment<StateVersionDetailsFragment_details$key>(
        graphql`
        fragment StateVersionDetailsFragment_details on Workspace
        {
            id
            fullPath
        }
    `, props.fragmentRef)

    const queryData = useLazyLoadQuery<StateVersionDetailsQuery>(graphql`
        query StateVersionDetailsQuery($id: String!) {
            node(id: $id) {
                ... on StateVersion {
                    id
                    createdBy
                    data
                    metadata {
                        createdAt
                    }
                    run {
                        createdBy
                    }
                }
            }
        }
    `, { id: stateVersionId }, { fetchPolicy: 'store-and-network' })

    const createdBy = queryData.node?.run ? queryData.node.run.createdBy : (queryData.node?.createdBy || '')

    return (
        <Box>
            <NamespaceBreadcrumbs
                namespacePath={data.fullPath}
                childRoutes={[
                    { title: "state versions", path: 'state_versions' },
                    { title: `${stateVersionId.substring(0, 8)}...`, path: stateVersionId }
                ]}
            />
            <Box display="flex" alignItems="center">
                <Typography component="div" sx={{ paddingRight: '6px' }}>State version created{' '}
                    <Tooltip sx={{ display: 'inline-block' }} title={queryData.node?.metadata?.createdAt as string}>
                        <Box display="flex" alignItems="center">{moment(queryData.node?.metadata?.createdAt as moment.MomentInput).fromNow()}</Box>
                    </Tooltip>
                    {' '}by
                </Typography>
                <Tooltip title={createdBy}>
                    <Box>
                        <Gravatar width={20} height={20} email={createdBy}/>
                    </Box>
                    </Tooltip>
                </Box>
            <Box sx={{ fontSize: 14, overflowX: 'auto' }}>
                <SyntaxHighlighter language="json" style={a11yDark}>
                    {JSON.stringify(JSON.parse(atob(queryData.node?.data || '')), null, 2)}
                </SyntaxHighlighter>
            </Box>
        </Box>
    )
}

export default StateVersionDetails
