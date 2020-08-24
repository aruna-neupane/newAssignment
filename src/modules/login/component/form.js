import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { Button } from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
}
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui-error-message">
                    <div style={{color:"red"}}><InfoCircleOutlined /> {error}</div>
                </div>

            );
        }

    }
    renderInput = ({input, label, meta, type}) => {
      return(
          <div >
              <label>{label}</label><br/>
              <input {...input} type={type} placeholder={label} style={{width:'90%', height:'30px', borderRadius: "25px", marginTop:'5px', marginBottom:'5px', borderWidth:'1px', paddingLeft:'15px'}}/>
              {this.renderError(meta)}
          </div>
      )
    }
    render(){
        const { onSubmit, required } = this.props;  
        
        return(
           <form className="login-form" onSubmit={this.props.handleSubmit(onSubmit)}>
               <Field name='username' type="text"component={this.renderInput} label='Username' validate={[required]}/>
               <Field name="password"  type="password" component={this.renderInput} label='Password' validate={[required]}/>
               {/* <button className='ui button primary' style={{marginTop: '20px'}}>Submit</button> */}
               <Button htmlType="submit" className="login-form-button">
           Log in
         </Button> <br/>
      Or  <br/>
       <a href="" style={{color:'red'}}>Register now!</a>
           </form>
        )
    }
}

export default reduxForm({
    form: 'login-form',
  })(LoginForm)