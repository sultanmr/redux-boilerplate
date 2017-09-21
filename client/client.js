import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from "axios";

const initialState = {
  fetching: false,
  fetched:false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_START":
      return Object.assign({}, state, {fetching:true});
      break;
      case "RECEIVE_USERS":
      return Object.assign({}, state,  {fetching:false, fetched:true, users:action.info});
      break;
      case "FETCH_USER_ERROR":
      return Object.assign({}, state,  {fetching:false, error:action.info});
      break;
    }
    return state;
}

const middleware = applyMiddleware(thunk,createLogger());

const store = createStore (reducer,  middleware);

store.dispatch((dispatch)=>
{
  dispatch ({type:"FETCH_USERS_START"});
  axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response)=> {
    dispatch({type:"RECEIVE_USERS", info: response.data});
  })
  .catch((err)=> {
    dispatch({type:"FETCH_USER_ERROR", info: err});
  });
});
