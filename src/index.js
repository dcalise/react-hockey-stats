import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Route, HashRouter } from 'react-router-dom';
// import createHashHistory from 'history/createHashHistory';

import App from './components/App';
// import Login from './components/Login';

import store from './store';


// const history = createHashHistory();

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
