import React, { Component, Fragment } from 'react';
import { Row } from 'antd';
import './../../../assets/css/home.css'

class sider extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {        
        return (
            <Fragment>
            <div className="sider">
            <div
            className="sid1"
             style={{height:'20%', borderBottom:'1px', borderBottomColor:'lightgray', borderBottomStyle:'solid', paddingBottom:'15px', paddingTop:'15px', color:'grey', cursor:'pointer'}} 
            onClick={() => {
                  this.props.onClickProfile('Profile');
                }}>
            Profile
            </div>
            <div style={{height:'20%', borderBottom:'1px', borderBottomColor:'lightgray', borderBottomStyle:'solid', paddingBottom:'15px', paddingTop:'15px', color:'grey', cursor:'pointer'}} 
             className="sid1"
            onClick={() => {
                this.props.onClickProfile('Posts');
              }}>
            Posts
            </div>
            <div style={{height:'20%', borderBottom:'1px', borderBottomColor:'lightgray', borderBottomStyle:'solid', paddingBottom:'15px', paddingTop:'15px', color:'grey', cursor:'pointer'}}
             className="sid1"
            onClick={() => {
                this.props.onClickProfile('Gallery');
              }}>
            Gallery
            </div>
            <div style={{height:'20%', borderBottom:'1px', borderBottomColor:'lightgray', borderBottomStyle:'solid', paddingBottom:'15px', paddingTop:'15px', color:'grey', cursor:'pointer'}}
             className="sid1"
            onClick={() => {
                this.props.onClickProfile('ToDo');
              }}>
            ToDo
            </div>
            </div>
            </Fragment>
        );
    }
}

export default sider;