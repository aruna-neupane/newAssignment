import React, { Component, Fragment } from 'react';
import {Col} from 'antd';

class defaults extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <center>
                    <Col style={{fontSize:'80px', color:'#000000', fontWeight:'bolder', marginTop:'20%'}}>
                    Page Not Found
                    </Col>
                    <button onClick={()=>{this.props.history.push('/')}}>login page</button>
                </center>
                <div style={{marginTop: 'auto', marginBottom:0, marginLeft:'589px', marginRight:'20px'}} align="right">
       
        </div>
            </Fragment>
        );
    }
}

export default defaults;