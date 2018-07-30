import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import { Auth } from "../config/agent";

import Home from './Home';
import Register from './Register';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    Auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        dispatch({ type: 'APP_LOAD', payload: user});
      } else {
        dispatch({ type: 'APP_LOAD', payload: null});
      }
    });
  },
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class App extends React.Component {
  componentWillMount() {
    // this.props.fetchUser();
    this.props.onLoad();
    // this.props.onLoad(token ? agent.Auth.current() : null, token);
    // this.props.onLoad(token ? null : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
            </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
          Loading...
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
