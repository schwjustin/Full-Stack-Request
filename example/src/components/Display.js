import React from "react";
import TextField from '@material-ui/core/TextField';

export function Display(props) {
    const{prop} = props
    return(
        <TextField id="outlined-basic" label="Counter" value={prop} variant="outlined" />
    );
} 