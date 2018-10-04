import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Auth } from '../config/agent';
import ListErrors from './ListErrors';
import { changeEmail, changePassword, changeConfirmPassword, submitRegister, unloadRegisterPage } from '../actions/auth';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = {
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitRegister,
  unloadRegisterPage
}

class Register extends React.Component {

  componentWillUnmount() {
    this.props.unloadRegisterPage();
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

                <form
                  onSubmit={ev => {
                    ev.preventDefault();
                    this.props.submitRegister(email, password, confirmPassword);
                  }}
                >
                  <fieldset>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Email"
                      value={this.props.email || ''}
                      onChange={this.props.changeEmail}
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      value={this.props.password || ''}
                      onChange={this.props.changePassword}
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Confirm Password"
                      value={this.props.confirmPassword || ''}
                      onChange={this.props.changeConfirmPassword}
                      required
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
