import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from '../config/agent';
import ListErrors from './ListErrors';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onChangeConfirmPassword: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'confirmPassword', value }),
  onSubmit: (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      const error = { message: 'The passwords do not match' };
      dispatch({ type: 'REGISTER', error });
    } else {
      Auth.createUserWithEmailAndPassword(email, password).then((payload) => {
        dispatch({ type: 'REGISTER', payload });
      }, (error) => {
        dispatch({ type: 'REGISTER', error });
      });
    }
  },
  onUnload: () => dispatch({ type: 'REGISTER_PAGE_UNLOADED' }),
});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeConfirmPassword = ev => this.props.onChangeConfirmPassword(ev.target.value);
    this.submitForm = (email, password, confirmPassword) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(email, password, confirmPassword);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const { email, password, confirmPassword } = this.props;

    return (
      <div className="register page">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="text-center">
                <h1>
                  Register
                </h1>
                <Link to="login">
                  Have an account?
                </Link>

                <hr />

                <ListErrors errors={this.props.errors} />

                <form onSubmit={this.submitForm(email, password, confirmPassword)}>
                  <fieldset>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Email"
                      value={this.props.email || ''}
                      onChange={this.changeEmail}
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      value={this.props.password || ''}
                      onChange={this.changePassword}
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Confirm Password"
                      value={this.props.confirmPassword || ''}
                      onChange={this.changeConfirmPassword}
                    />
                  </fieldset>
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
