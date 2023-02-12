import React, { Component } from 'react';
import { Button, Grid, Typography, FormHelperText, FormControl, FormControlLabel } from "@mui/material";

export default class UploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }

        this.handleNext = this.handleNext.bind(this)
    }

    handleFileChanged(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

    handleNext() {
        console.log(this.state)
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
                    <FormControl>
                        <Button variant="outlined" component="label">
                            Upload
                            {/* <input hidden accept="image/*" multiple type="file" onChange={this.handleFileChanged}/> */}
                            <input type="file" hidden/>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align='center'>
                    <FormControl component=''>
                        <Button variant='contained' onClick={this.handleNext} >Next </Button>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
}