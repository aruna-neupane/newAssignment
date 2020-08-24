import React, { Component, Fragment } from 'react';
import {Col} from 'antd';
import Chat from './chat';

class comingSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <center>
                    <Col style={{fontSize:'80px', color:'#f2f2f2', fontWeight:'bolder', marginTop:'20%'}}>
                    Coming Soon
                    </Col>
                </center>
                <div style={{marginTop: 'auto', marginBottom:0, marginLeft:'589px', marginRight:'20px'}} align="right">
        <Chat
        list={this.props.list}
        />
        </div>
            </Fragment>
        );
    }
}

export default comingSoon;