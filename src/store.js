import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import auth from './reducers/auth';
import common from './reducers/common';
import profile from './reducers/profile';

const reducer = combineReducers({
  auth,
  common,
  profile
});

const middleware = applyMiddleware(reduxThunk);

const store = createStore(reducer, middleware);

export default store;