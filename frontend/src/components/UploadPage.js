import React, { Component } from 'react';
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { FormHelperText } from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Link from "react-router-dom"
import { FormControlLabel } from '@mui/material/FormControlLabel';

export default class UploadPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <Typography component='h4' variant='h4'>
                    Create
                </Typography>
            </Grid>
        </Grid>
    }
}