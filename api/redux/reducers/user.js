

const initialState = {
    user: {},
    fetching: false,
    fetched: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return Object.assign({}, state, { fetching: true });
        case "FETCH_USER_REJECTED":
            return Object.assign({}, state, { fetching: false, error: action.payload });
            break;
        case "FETCH_USER_FULFILLED":
            return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload });
            break;
        case "SET_USER_NAME":
            return {
                ...state, 
                user: {...state.user, name:action.payload}
            }
            break;
        case "SET_USER_AGE":
        return {
            ...state, 
            user: {...state.user, age:action.payload}
        }
            break;

    }
    return state;
}