import React, { Component, Fragment } from 'react';
import Home from './../../modules/home/home-component';
import { connect } from 'react-redux';
import {getUser, getTitle} from './../../modules/home/store/action';
import auth from './../../common/router/authentication';

class homePage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getUser(1);
    };
    onClickProfile = ((value) =>{
       this.props.getTitle(value)
    })    
   signOut = (() => {
    auth.logout(() => {
        this.props.history.push('/')
        })
   })
    render() {
        return (
            <Fragment>
                <Home 
                title={this.props.home.title} 
                data={this.props.home.listData[0]}
                list={this.props.home.list}
                onClickProfile={this.onClickProfile}
                onClickGallery={this.onClickGallery}
                onClickPosts={this.onClickPosts}
                onClickTodo={this.onClickTodo}
                signOut={this.signOut}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { home } = state;
    return {
        home,
    };
  };
const mapDispatchToProps = (dispatch => ({
        getUser,
        getTitle,
    }))()
export default connect(mapStateToProps, mapDispatchToProps)(homePage);