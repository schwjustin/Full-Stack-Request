import React from 'react';
import Button from '@material-ui/core/Button';

export function Plus(props) {
    const{prop} = props

    return(
        <Button variant="contained" value={1} onClick={prop}>Plus</Button>
    );
} 