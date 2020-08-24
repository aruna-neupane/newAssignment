import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer } from 'redux-form';
import generalReducer from "../store/reducer/";
import loginReducer from "./../../modules/login/store/reducer";
import homeReducer from "./../../modules/home/store/reducer";


const reducers = combineReducers({
  login: loginReducer,
  home: homeReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export { store };