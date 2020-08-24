import React, { Component, Fragment } from 'react';
import { Row, Col, notification } from 'antd';
import './../../assets/css/style.css';
import Logo from './../../modules/login/component/logo'
import LoginForm from './../../modules/login/component/form'
import logo from './../../assets/images/logo.png'
import { getFormValues, submit, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Notification } from '../../common/component/notification';
import auth from '../../common/router/authentication';
import {getUserlogin } from './../../modules/login/store/action';

class login extends Component {
    constructor(props) {
        super(props);
        
    }
    
    // onSubmitForm = (values) => {
    //     console.log('Submitted values are: ', JSON.stringify(this.props.formValue));
    //     // const { pocketRemoteService, cookies } = this.props;
    //     // const { locale } = this.state;
    //     //   const { username, password } = params;
    //     //   const request = {
    //     //     clientId: CLIENT_ID,
    //     //     clientSecret: CLIENT_SECRET,
    //     //     username,
    //     //     password,
    //     //   };
    
    //     //   const loginInfo = {
    //     //     checked: this.state.checked,
    //     //     username: this.state.checked === false ? '' : this.state.username,
    //     //   };
    
    //     //   localStorage.setItem('login-info', JSON.stringify(loginInfo));
    
    //     //   this.props.ssoAuthenticate(pocketRemoteService, request, cookies, locale);
    //     };
        //  submit(values) {
        //     return sleep(1000).then(() => {
        //       // simulate server latency
        //       if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        //         throw new SubmissionError({
        //           username: 'User does not exist',
        //           _error: 'Login failed!'
        //         })
        //       } else if (values.password !== 'redux-form') {
        //         throw new SubmissionError({
        //           password: 'Wrong password',
        //           _error: 'Login failed!'
        //         })
        //       } else {
        //         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        //       }
        //     })
        //   }
        onSubmit =(formValues) => {
            console.log(formValues);
            this.props.getUserlogin(formValues.username, formValues.password).then((response) => {
                if(response.length > 0){
                    auth.login(() => {
                        this.props.history.push('/profile')
                        })
                } else{
                    alert('invalid username/password')
                }
            })
        
        }     
       required = value => value ? undefined : 'Required'
    render() {
        // const values = this.props.formValue
        // const validate = () => {
        //     const errors = {}
        //     if (!values.username) {
        //       errors.username = 'Required'
        //     } else if (values.username.length > 15) {
        //       errors.username = 'Must be 15 characters or less'
        //     }
        //     if (!values.email) {
        //       errors.email = 'Required'
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //       errors.email = 'Invalid email address'
        //     }
        //     if (!values.age) {
        //       errors.age = 'Required'
        //     } else if (isNaN(Number(values.age))) {
        //       errors.age = 'Must be a number'
        //     } else if (Number(values.age) < 18) {
        //       errors.age = 'Sorry, you must be at least 18 years old'
        //     }
        //     return errors
        //   }
          
        //   const warn = () => {
        //     const warnings = {}
        //     if (values.age < 19) {
        //       warnings.age = 'Hmm, you seem a bit young...'
        //     }
        //     return warnings
        //   }
        //  console.log(JSON.stringify(this.props.formValue))
        return (
            <div className="login-page">
                <div className="container-row">
                    <div span={10} className="first-div">
                        <Logo/>
                    </div>
                    <div span={10} className="second-div">
                        <LoginForm
                        // handleSubmit={this.onSubmitForm}
                        // inititalValue={this.props.login.initialFormData} 
                        required={this.required}
                        onSubmit={this.onSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { login } = state;
    return {
        login,
        formValue: getFormValues('login-form')(state),
    };
};

const mapDispatchToProps = (dispatch => ({
    getUserlogin
}))();

export default connect(mapStateToProps, mapDispatchToProps)(login);