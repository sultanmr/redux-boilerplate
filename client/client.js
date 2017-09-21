import {applyMiddleware, createStore} from 'redux';

const reducer = (state=0, action) => {
  switch (action.type) {
    case "INC":
    return state+1;
    break;
    case "DEC":
    return state-1;
    break;
    case "E":
    throw new Error ("producing error from reducer");
    default:
    return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.log ("inside logger", action);
  next(action);
}

const error = (store) => (next) => (action) => {
  console.log ("inside error", action);
  try {
    next (action);
  } catch (e) {
    console.log ("I HAVE CAUGHT AN ERROR...", e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore (reducer, 1, middleware);

store.subscribe (()=> {
  console.log ("store changed", store.getState());
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});

store.dispatch({type:"DEC"});
store.dispatch({type:"E"});