import Chip from "@mui/material/Chip";
import React from 'react';

interface Props {
    type: string
}

function ManagedIdentityTypeChip({ type }: Props) {
    return (
        <React.Fragment>
            {type === 'aws_federated' && <Chip sx={{ color: '#FF9900', borderColor: '#FF9900', marginRight: 2 }} variant="outlined" label={'aws'} size="small" />}
            {type === 'azure_federated' && <Chip sx={{ color: '#00a2ed', borderColor: '#00a2ed', marginRight: 2 }} variant="outlined" label={'azure'} size="small" />}
            {type === 'tharsis_federated' && <Chip sx={{ color: '#4db6ac', borderColor: '#4db6ac', marginRight: 2 }} variant="outlined" label={'tharsis'} size="small" />}
        </React.Fragment>
    )
}

export default ManagedIdentityTypeChip;
