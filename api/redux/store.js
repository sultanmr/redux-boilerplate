import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';



const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore (reducer,  middleware);

// store.dispatch ({
//   type: "FETCH_USERS",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users")
// });

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
