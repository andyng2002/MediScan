import React, { Component } from 'react';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, FormControlLabel } from "@mui/material";
export default class ScannedPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing = {1} style = {{ backgroundColor: "#E6E8E6", height: "101vh", width: "101vw"}}>
                <Grid item xs={12} align='center' style = {{height: "20wh", width: "20vw"}}>
                </Grid>

            <Grid container spacing={12} >
                <Grid item xs={2.5} align='center' style={{backgroundColor: "#E6E8E6"}}>
                </Grid>

                <Grid item xs={8} align='center' style={{backgroundColor: "#FFFFFF"}}>
                    <Typography align='center' component='h3' variant='h3' style={{fontFamily: 'Futura', color: '#2F4550', marginBottom: '20px'}}>
                        METFORMIN 1000MG
                    </Typography>
                    <Typography align='center' component='h4' variant='h4' style={{fontFamily: 'Futura', color: '#8BABBB', marginBottom: '60px'}}>
                        TAKE ONE TABLET BY MOUTH TWICE DAILY
                    </Typography>
                    <Typography align='center' component='h4' variant='h4' style={{fontFamily: 'Futura', color: '#8BABBB', marginBottom: '50px'}}>
                        enter phone number:     
                        <TextField id="outlined-basic" variant="outlined" />
                    </Typography>
                </Grid>
                
                <Grid item xs={2.5} align='center' style={{backgroundColor: "#E6E8E6"}}>
                </Grid>
            
                </Grid>
                <Grid item xs={2} align='center' style={{backgroundColor: "#E6E8E6"}}>
                </Grid>
            </Grid>
        )
    }
}

// import os
// import io
// from google.cloud import vision
// from google.cloud.vision_v1 import types

// Ban_words = {"subtotal","total","change","payment","purchase","service","tip","saved",
//              "balance","visa","saving","card","credit","cash","coupon","tax",""}



// os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'Hack/Hack/ServiceAccountToken.json'


// client = vision.ImageAnnotatorClient()

// Filename = "receipt_example_2.svg.png"
// Dir = "Hack/Hack/Data"

// with io.open(os.path.join(Dir, Filename), 'rb') as imageFile:
//     content = imageFile.read()

// image = types.Image(content=content)
// response = client.text_detection(image=image)
// texts = response.text_annotations

// # for text in texts:
//     # if text.description.isalpha(): 
// fullText = '\n"{}"'.format(texts[0].description).split("\n")
// foodList = []

// for word in fullText:
//     print(word)
//     temp = word.replace(" ","")
//     if temp.isalpha() and len(word)>2 and word.lower() not in Ban_words:
//         foodList.append(word)

// print(foodList)