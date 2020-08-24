import React, { Component, Fragment } from 'react';
import Header from './header';
import { Row, Col } from 'antd';
import ComingSoon from './coming-soon';
import Chat from './chat';
import MapView from './map-component'

class content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {title, data, list, signOut} = this.props
        return (
            <Fragment>
            <Header 
            title={title}
            data={data}
            list={list}
            signOut={signOut}
            />
            {title == 'Profile' ?
            <Row style={{display:'flex',
             overflowX:'hidden', 
             overflowY:'hidden', 
             position:'absolute', 
             width:'80%'}}>
                <Col style={{width:'40%', 
                borderRight:'1px', 
                borderRightColor:'lightgray', 
                borderRightStyle:'solid'}}>
                    <div style={{display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center"}}>
                        <img src={data.profilepicture} style={{ width:'180px', 
                        height:'180px', 
                        borderRadius:'50%'}}/>
                    </div>
                    <Row style={{display:'flex', 
                    marginTop:'10px', 
                    alignItems:'center', 
                    justifyContent:'center'}}>
                        <Col style={{alignContent:'center', 
                        textAlign:'center'}}>
                            <span>{data.name}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex',
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>Username</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.username}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px',
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>e-mail</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.email}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>phone</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.phone}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>website</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.website}</span>
                            </Col>
                    </Row>
                    <Row style={{marginLeft:'50px', 
                    marginRight:'50px', 
                    borderBottom:'1px', 
                    borderBottomColor:'lightgray',
                    borderBottomStyle:'solid'}} />
                    <Row style={{display:'flex', 
                    marginTop:'10px', 
                    alignItems:'center', 
                    justifyContent:'center'}}>
                        <Col style={{alignContent:'center', 
                        textAlign:'center'}}>
                            <span>Company</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>Name</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.company.name}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>catchphrase</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.company.catchPhrase}</span>
                            </Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>bs</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.company.bs}
                            </span></Col>
                    </Row>
                    <Row style={{display:'flex', 
                    marginTop:'10px'}}>
                        <Col style={{width:'30%', 
                        marginRight:'10px', 
                        marginLeft:'auto', 
                        alignContent:'right', 
                        textAlign:'right'}}>
                            <span>website</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'60%'}}>
                            <span>{data.website}</span>
                            </Col>
                    </Row>
                </Col>
                <Col style={{width:'60%', 
                alignItems:'center'}}>
                <Row style={{display:'flex',
                marginTop:'10px', 
                marginLeft:'50px'}}>
                        <Col style={{marginLeft:'10px'}}>
                            <span>Address</span>
                            </Col>
                </Row>
                <Row style={{display:'flex', 
                marginTop:'10px', marginLeft:'100px'}}>
                        <Col style={{width:'12%', 
                        alignContent:'right', 
                        textAlign:'right', 
                        marginRight:'15px'}}>
                            <span>Street</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'83%'}}>
                            <span>{data.address.street}</span>
                            </Col>
                </Row>
                <Row style={{display:'flex', 
                marginTop:'10px', 
                marginLeft:'100px'}}>
                    <Col style={{width:'12%', 
                    alignContent:'right', 
                    textAlign:'right', 
                    marginRight:'15px'}}>
                        <span>Suite</span>
                        </Col>
                    <Col style={{width:'5%', 
                    alignItems:'center'}}>:</Col>
                    <Col style={{width:'83%'}}>
                        <span>{data.address.suite}</span>
                        </Col>
                </Row>
                <Row style={{display:'flex', 
                marginTop:'10px', 
                marginLeft:'100px'}}>
                        <Col style={{width:'12%', 
                        alignContent:'right', 
                        textAlign:'right', 
                        marginRight:'15px'}}>
                            <span>City</span>
                            </Col>
                        <Col style={{width:'5%', 
                        alignItems:'center'}}>:</Col>
                        <Col style={{width:'83%'}}>
                            <span>{data.address.city}</span>
                            </Col>
                </Row>
                <Row style={{display:'flex', 
                marginTop:'10px', 
                marginLeft:'100px'}}>
                    <Col style={{width:'12%', 
                    alignContent:'right', 
                    textAlign:'right', 
                    marginRight:'15px'}}>
                        <span>Zipcode</span>
                        </Col>
                    <Col style={{width:'5%', 
                    alignItems:'center'}}>:</Col>
                    <Col style={{width:'83%'}}>
                        <span>{data.address.zipcode}</span>
                        </Col>
                </Row>
                <div style={{marginTop:'10px', 
                marginLeft:'100px', 
                borderRadius:'10px', 
                overflow:'hidden', 
                display:'block'}}>
                    <MapView
                    long={data.address.geo.lng}
                    lat={data.address.geo.lat}
                     />
                </div>
                <div style={{marginTop: 'auto', 
                marginBottom:0}} align="right">
        <Chat
        list={this.props.list}
        data={this.props.data}
        />
        </div>
                </Col>
            </Row>
            :
            <ComingSoon
            list={this.props.list}
            data={this.props.data}
            />
        }
        
            </Fragment>
        );
    }
}

export default content;