import { Breadcrumbs } from '@mui/material';
import React from 'react';
import Link from '../routes/Link';

interface Route {
    title: string
    path: string
}

interface Props {
    namespacePath: string
    childRoutes?: Route[] | null 
}

function NamespaceBreadcrumbs(props: Props) {
    const pathParts = props.namespacePath.split("/") ?? [];
    const childRoutePaths = props.childRoutes?.map(r => r.path) ?? [];

    return (
        <Breadcrumbs aria-label="group breadcrumb" sx={{ marginBottom: 2 }}>
            <Link color="inherit" to={'/groups'}>
                groups
            </Link>
            {pathParts.map((name, i) => (
                <Link key={name} color="inherit" to={`/groups/${pathParts.slice(0, i + 1).join('/')}`}>
                    {name}
                </Link>
            ))}
            {props?.childRoutes?.map(({title, path}, i) => (
                path[0] === '/' ? 
                <Link key={path} color="inherit" to={path}>{title}</Link> 
                :
                <Link key={path} color="inherit" to={`/groups/${props.namespacePath}/-/${childRoutePaths.slice(0, i + 1).join('/')}`}>{title}</Link>
            ))}
        </Breadcrumbs>
    );
}

export default NamespaceBreadcrumbs;