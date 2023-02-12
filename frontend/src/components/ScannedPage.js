import React, { Component } from 'react';

export default class ScannedPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>You have scanned your perscription</p>
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