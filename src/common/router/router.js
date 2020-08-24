import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./../../app/login/login";
import home from "../../app/home/home";
import defaults from '../../app/default/default';
import { PrivateRoute } from "./private-routes";

class Routes extends Component {
  render(){
    const { history } = this.props;
    const baseUrl = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"
         component={login} 
         exact={true} />
         <Route path="/login"
         component={login} 
         exact={true} />
         <PrivateRoute path="/profile"
         component={home} 
         exact={true} />
         <Route 
         component={defaults} />
      </Switch>
    </BrowserRouter>
  );
}
}
export default Routes;