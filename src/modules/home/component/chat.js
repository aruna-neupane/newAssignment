import React, { Component, Fragment } from 'react';
import {Col, Row} from 'antd';
import MessageTwoTone from '@ant-design/icons'
class chat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false
         };
    }
    showHide = () =>{
            this.setState({
                show: !this.state.show,
            })
        }
    render() {
       
        return (
            <Fragment>
                <div style={{marginBottom:0, marginTop:'auto', marginRight:'70px' }}>
                    <Row>
                    <div style={{width:'30%', height: this.state.show ? '50px' : '1px', borderRadius:'10px', paddingBottom:'5px', marginBottom:0, marginTop:'auto' }}>
                       <Row style={{display: 'flex', height:'20px', paddingLeft:'10px', paddingTop:'20px', paddingBottom:'10px', borderTopRightRadius:'10px', borderTopLeftRadius:'10px', backgroundColor:'rgb(44, 100, 204)', color:'white', position: 'fixed', zIndex: 9, bottom: this.state.show ? 300 : 0, width:'16.8%'}}
                       onClick={()=> this.showHide()}>
                            <span><MessageTwoTone /> Chats </span></Row>
                            
                       {this.state.show && <div style={{height:this.state.show ? '300px' : 0, overflowY:'scroll',  borderWidth:'1px', borderStyle:'solid', borderColor:'rgb(44, 100, 204)', display: this.state.display, position: 'fixed', bottom: '0', zIndex: 9, backgroundColor:'white'}} id="chatbox" >
                       {this.props.list.map((data) => {
                           return(
                           <Row style={{display: 'flex', alignContent:'left', justifyContent:'left', marginLeft:'10px', marginRight:'10px', height:'10%', marginTop:'10px', marginBottom:'10px', borderBottomColor:'rgb(242, 242, 242)', borderBottomStyle:'solid', borderBottomWidth:'1px'}}>
                               <span>
                                   <img src={data.profilepicture} style={{ width:'30px', height:'30px', borderRadius:'50%'}}/>
                                   </span>
                            <span style={{alignSelf:'center', marginLeft:'5px', justifyContent:'center'}}>
                                {data.name}
                                </span>
                            </Row>
                           )
                       })}
                       </div>}
                    </div>  
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default chat;