import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import auth from './reducers/auth';
import common from './reducers/common';
import stats from './reducers/stats';

const reducer = combineReducers({
  auth,
  common,
  stats
});

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(reduxThunk);

const store = createStore(reducer, composeEnhancers(middleware));

export default store;