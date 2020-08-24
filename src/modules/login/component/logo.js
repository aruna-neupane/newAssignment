import React, { Component } from 'react';
import logo1 from './../../../assets/images/logo.png';
import './../../../assets/css/style.css'

class logo extends Component {
    render() {
        return (
            <div>
                <img src={logo1} className="logo" />
                <center><b  className="text-style">"One Stop Tech Solution"</b></center>
            </div>
        );
    }
}

export default logo;