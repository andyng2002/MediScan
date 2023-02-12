import React, { Component } from 'react';
import { Button, Grid, Typography, FormHelperText, FormControl, FormControlLabel } from "@mui/material";
import { textAlign } from '@mui/system';
export default class UploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.handleFileChanged = this.handleFileChanged.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    handleFileChanged(e) {
        this.setState({
            file: e.target.value
        })
    }

    handleNext() {
        console.log(this.state)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         file: this.state.file
        //     })
        // }
        // fetch('/api/scan', requestOptions)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        this.props.history.push("/scanned/")
    }

    render() {
        return (
            <Grid container spacing={1} style = {{ backgroundColor: "#E6E8E6", height: "101vh", width: "101vw"}}>
                <Grid item xs={12} align='center'>
                    <Typography component='h2' variant='h2' style={{fontFamily: 'Poppins', color: '#2F4550', fontWeight: 'bold', fontSize: '90px' }}>
                        MediScan
                    </Typography>
                    <Typography component='h4' variant='h4' style={{fontFamily: 'Poppins', color: '#5B859A'}}>
                        Scan a picture and we can read the label name and dosage!
                    </Typography>
                    <Typography component='h4' variant='h4' style={{fontFamily: 'Poppins', color: '#5B859A'}}>
                        Add daily text reminders to help you remember when to take your medication
                    </Typography>
                </Grid>

                <Grid container spacing = {8}>
                    <Grid item xs={3.5} align='center' style={{backgroundColor: "#F5F5F5", marginBottom: '80px'}}>
                        <Typography component='h3' variant='h3' style={{fontFamily: 'Futura', color: '#8BABBB'}}>
                            SCAN MEDICATION
                        </Typography>
                    </Grid>
                    <Grid item xs={0.75} align='center' style={{backgroundColor: "#E6E8E6", marginBottom: '80px'}}>
                    </Grid>
                    <Grid item xs={3.5} align='center' style={{backgroundColor: "#F5F5F5", marginBottom: '80px'}}>
                        <Typography component='h3' variant='h3' style={{fontFamily: 'Futura', color: '#8BABBB'}}>
                            PHONE NUMBER SIGN UP
                        </Typography>
                    </Grid>
                    <Grid item xs={0.75} align='center' style={{backgroundColor: "#E6E8E6", marginBottom: '80px'}}>
                    </Grid>
                    <Grid item xs={3.5} align='center' style={{backgroundColor: "#F5F5F5", marginBottom: '80px'}}>
                        <Typography component='h3' variant='h3' style={{fontFamily: 'Futura', color: '#8BABBB'}}>
                            RECEIVE TEXT ALERTS
                        </Typography>  
                    </Grid>
                </Grid>

                <Grid container spacing = {12}>
                <Grid item xs={12} align='center'>
                    <Typography component='h4' variant='h4' style={{fontFamily: 'Poppins', color: '#5B859A', marginBottom: '10px'}}>
                        Upload a Picture of Your Prescription
                    </Typography>
                    <FormControl style={{marginBottom: '40px'}}>
                        <Button variant="outlined" component="label" >
                            Upload
                            <input hidden accept="image/*" multiple type="file" onChange={this.handleFileChanged}/>
                        </Button>
                    <FormControl component=''>
                        <a href='/scanned'><Button variant='contained' onClick={this.handleNext}>Next</Button></a>
                    </FormControl>
                    </FormControl>
                </Grid>
                </Grid>
            </Grid>
        )
    }
}