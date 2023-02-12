import React, { Component } from 'react';
import { Button, Grid, Typography, FormHelperText, FormControl, FormControlLabel } from "@mui/material";

export default class UploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: None
        }
    }

    handleFileChanged(e) {
        this.setState({
            file: e.target.value
        })
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align='center'>
                    <Typography component='h4' variant='h4'>
                        Upload a Picture of Your Perscription
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <Button variant="outlined" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item xs={12} align='center'>
                    <FormControl component='fieldset'>
                        <Button variant='contained' >Next </Button>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
}