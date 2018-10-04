import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import * as commonActions from '../actions/common';

import Header from './Header';
import Home from './Home';
import Dashboard from './Dashboard';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { REDIRECT } from '../actions/types';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(commonActions.onLoad()),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

class App extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.props.history.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
          Loading...
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
