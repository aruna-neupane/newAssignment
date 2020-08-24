import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import Sider from '../home/component/sider'
import Content from '../home/component/content';

class homeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {title, data, signOut} = this.props
        return (
            <Fragment>
                <Row style={{display:'flex', margin:'30px'}}>
                    <Col style={{height:'100%', width:'18%'}} >
                    <Sider 
                    onClickProfile={this.props.onClickProfile}
                    />
                    </Col>
                    <Col style={{width:'80%', overflowX:'hidden'}}>
                    <Content 
                    title={title}
                    data={this.props.data}
                    list={this.props.list}
                    signOut={this.props.signOut}
                    />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default homeComponent;