import * as actionType from './action-type';

const initialData =  [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
]
const initialState = {
    listData: initialData,
    list: initialData,
    title: 'Profile',
}
const handler = (currentState) => {
    const getData = (payload) => ({ ...currentState, listData: payload });
    const getList = (payload) => ({ ...currentState, list: payload });
    const getTitle = (payload) => ({ ...currentState, title: payload });
    return{
        getData,
        getTitle,
        getList
    };
};
export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case actionType.USER_DATA:
            return handler(state).getData(payload);
        case actionType.USER_LIST:
            return handler(state).getList(payload);
        case actionType.SET_PAGE:
            return handler(state).getTitle(payload);
    default :
    return state;
    }}