import React, { Component } from 'react';
import ScannedPage from './ScannedPage';
import MedicationsPage from './MedicationsPage';
import UploadPage from './UploadPage';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UploadPage />} />
                    <Route path='/scanned' element={<ScannedPage />} />
                    <Route path='/medications' element={<MedicationsPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}