import { NotificationError } from "../../../common/component/notificationError";
import * as actionType from './action-type'
import axios from 'axios';

const setUser = payload => ({
    type: actionType.USER_DATA,
    payload,
  });
const setList = payload => ({
    type: actionType.USER_LIST,
    payload,
})

export const getTitle = payload => ({
    type: actionType.SET_PAGE,
    payload,
  });

export const getUser = (id) => dispatch => 
new Promise((resolve, reject) => {
        axios.get("https://my-json-server.typicode.com/aruna-neupane/database/users").then(
          (response) => {
            let res;
            let list=[];
            list= response.data.filter(item => item.id != id)  
            res = response.data.filter(item => item.id == id)
            dispatch(setList(list));
            dispatch(setUser(res))
            resolve(list, res);
          },
          (error) => {
            alert(error);
            reject();
          }
        );
    });

