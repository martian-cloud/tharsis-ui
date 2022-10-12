import React from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as MaterialLink, LinkProps as MaterialLinkProps } from '@mui/material';

function Link(props: RouterLinkProps & MaterialLinkProps) {
    const { underline, ...extraProps } = props;
    return (
        <MaterialLink
            {...extraProps}
            underline={underline ?? 'hover'}
            component={RouterLink}
        >
            {props.children}
        </MaterialLink>
    );
}

export default Link
