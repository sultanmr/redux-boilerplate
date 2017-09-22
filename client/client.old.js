import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from "axios";

const initialState = {
  fetching: false,
  fetched:false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_PENDING":
      return Object.assign({}, state, {fetching:true});
      break;
      case "FETCH_USERS_FULFILLED":
      return Object.assign({}, state,  {fetching:false, fetched:true, users:action.payload});
      break;
      case "FETCH_USERS_REJECTED":
      return Object.assign({}, state,  {fetching:false, error:action.payload});
      break;
    }
    return state;
}

const middleware = applyMiddleware(promise(), createLogger());

const store = createStore (reducer,  middleware);

store.dispatch ({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});

// store.dispatch((dispatch)=>
// {
//   dispatch ({type:"FETCH_USERS_START"});
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//   .then((response)=> {
//     dispatch({type:"RECEIVE_USERS", info: response.data});
//   })
//   .catch((err)=> {
//     dispatch({type:"FETCH_USER_ERROR", info: err});
//   });
// });
