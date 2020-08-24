import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

class signOut extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
       const {data, list, signOut} = this.props
        return (
            <Fragment>
            <div style={{width:'280px', height:'350px', justifyContent: "center", alignItems: "center", elevation:'4', borderRadius:'10px', boxShadow: '5px 5px 8px 8px rgba(0,0,0,0.2)', position:'fixed', marginLeft:'750px', marginRight:'10px', zIndex:'10', backgroundColor:'white'}}>
            <Col style={{width:'40%'}}>
                        <img src={data.profilepicture} style={{ width:'80px', height:'80px', borderRadius:'50%', marginLeft:'95px', display:'block', marginTop:'35px', marginBottom:'15px'}}/>
                        </Col>
                        <Row style={{display:'flex', marginTop:'10px', alignItems:'center', justifyContent:'center'}}>
                        <Col style={{alignContent:'center', textAlign:'center'}}><span>{data.name}</span></Col>
                        </Row>
                        <Row style={{display:'flex', marginTop:'10px', alignItems:'center', justifyContent:'center'}}>
                        <Col style={{alignContent:'center', textAlign:'center', color:'grey'}}><span>{data.email}</span></Col>
                        </Row>
                        <Row style={{display: 'flex', alignContent:'center', justifyContent:'center', marginLeft:'10px', marginRight:'10px', height:'12%', marginTop:'10px',paddingTop:'7px', marginBottom:'10px', borderBottomColor:'rgb(242, 242, 242)', borderBottomStyle:'solid', borderTopColor:'rgb(242, 242, 242)', borderTopStyle:'solid', borderTopWidth:'1px', borderBottomWidth:'1px'}}>
                               <span>
                                   <img src={list[1].profilepicture} style={{ width:'30px', height:'30px', borderRadius:'50%'}}/>
                                   </span>
                            <span style={{alignSelf:'center', marginLeft:'5px', justifyContent:'center'}}>
                                {data.name}
                                </span>
                            </Row>
                            <Row style={{display: 'flex', alignContent:'center', justifyContent:'center', marginLeft:'10px', marginRight:'10px', height:'12%', marginTop:'10px', marginBottom:'10px'}}>
                               <span>
                                   <img src={list[2].profilepicture} style={{ width:'30px', height:'30px', borderRadius:'50%'}}/>
                                   </span>
                            <span style={{alignSelf:'center', marginLeft:'5px', justifyContent:'center'}}>
                                {data.name}
                                </span>
                            </Row>
                            <center>
                                <Button type="primary" danger style={{borderRadius:'15px', backgroundColor:'#d9534f', color:'white', height:'28px', width:'75px', border: 'none', cursor:'pointer'}} onClick={signOut}>
      Sign out
    </Button></center>
                    </div>
                    
                    </Fragment>
        );
    }
}

export default signOut;