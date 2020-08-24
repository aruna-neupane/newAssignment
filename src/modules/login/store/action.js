import { NotificationError } from "../../../common/component/notificationError";
import * as actionType from './action-type'
import axios from 'axios';

const setUserLogin = payload => ({
    type: actionType.LOG_IN,
    payload,
  });

export const getUserlogin = (uname, pass) => dispatch => 
new Promise((resolve) => {
        axios.get("https://my-json-server.typicode.com/aruna-neupane/database/login?username="+uname+"&pass="+pass).then(
          (response) => {
            let res;
            let list=[];
            res = response.data
            dispatch(setUserLogin(res))
            resolve(res);
          }
        );
    });

