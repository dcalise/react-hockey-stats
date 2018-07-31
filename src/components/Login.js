import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from '../config/agent';
import ListErrors from './ListErrors';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (email, password) => {
    Auth.signInWithEmailAndPassword(email, password).then((payload) => {
      dispatch({ type: 'LOGIN', payload });
    }, (error) => {
      dispatch({ type: 'LOGIN', error });
    });
  },
  onUnload: () =>
    dispatch({ type: 'LOGIN_PAGE_UNLOADED' })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    }
  }
  
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div className="login page">
        <div className="container">
          <div className="row">
          </div>
          <div className="col-sm-4 col-sm-offset-4">
            <div className="text-center">
              <h1>Sign In</h1>
              <Link to="register">Need an account?</Link>
              
              <hr />

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Email"
                    value={this.props.email || ''}
                    onChange={this.changeEmail} />
                </fieldset>
                <fieldset>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Password"
                    value={this.props.password || ''}
                    onChange={this.changePassword} />
                </fieldset>
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  disabled={this.props.inProgress}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
