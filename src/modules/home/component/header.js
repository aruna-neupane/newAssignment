import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import SignOut from './sign-out';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    showHide = () =>{
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        const {title, data, list, signOut} = this.props
        return (
            <Fragment >
                <Row style={{margin:'30px', borderBottom:'1px', borderBottomColor:'lightgray', borderBottomStyle:'solid', marginRight:'0px'}}>
                <div style={{display: 'flex', marginBottom:'20px'}}>
                    <div span={6} style={{alignSelf:'left', paddingBottom:'0px'}} > {title}</div>
                    <div span={6} style={{marginRight:'10px', marginLeft:'auto', display:'flex'}}>
                    <span  onClick={()=> this.showHide()} style={{cursor: 'pointer'}}>
                        <span style={{alignSelf:'center', marginLeft:'5px', paddingBottom:'5px'}}><b> Welcome {data.name}</b></span>
                        <span style={{justifyContent:'center', alignItems:'center'}}>
                     <img src={data.profilepicture} style={{ width:'30px', height:'30px', borderRadius:'50%'}}/>
                        </span>
                        </span>
                        </div>
                        
                </div>
                {this.state.show && 
                <SignOut 
                 title={title}
                 data={data}
                 list={list}
                 signOut={signOut}
                 />}
                </Row>
            </Fragment>
        );
    }
}

export default header;