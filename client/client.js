import {combineReducers, createStore} from 'redux';

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = Object.assign({}, state, {name: action.info});
      break;
    }
    case "CHANGE_AGE": {
      state = Object.assign({}, state, {age: action.info});
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers ({
  user: userReducer,
  tweets: tweetsReducer
});


const store = createStore(reducers);

store.subscribe(()=> {
  console.log ("store changed", store.getState());
});


store.dispatch({type:"CHANGE_NAME", info:'will'});
store.dispatch({type:"CHANGE_AGE", info:35});