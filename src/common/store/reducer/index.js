import { SET_TITLE, TOTAL_ROW_TABLE } from '../action/action-type';

const initialState = {
    title: '',
    totalRowTable: '',
};

const handler = (currentState) => {
    const setTitle = (title) => {
        return { ...currentState, title: title }
    };
    return { setTitle };
}


export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_TITLE:
            handler(state).setTitle(payload.title);
            break;
        default:
            return state;
    }
};