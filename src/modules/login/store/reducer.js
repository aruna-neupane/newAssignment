import * as actionType from './action-type';

const initialData = [
    {
        id: 1,
        pass: "pass123",
        username: "uname"
    }
]
const initialState = {
    loginUser: initialData,
}

const handler = (currentState) => {
    const getLogged = (payload) => ({ ...currentState, loginUser: payload });
    return{
        getLogged,
    };
};
export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case actionType.LOG_IN:
            return handler(state).getLogged(payload);
    default :
    return state;
    }}