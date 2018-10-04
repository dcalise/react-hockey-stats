import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Auth } from "../config/agent";
import ListErrors from "./ListErrors";
import {
  changeEmail,
  changePassword,
  submitLogin,
  unloadPage
} from "../actions/login";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = {
  changeEmail,
  changePassword,
  submitLogin,
  unloadPage
};

class Login extends React.Component {

  componentWillUnmount() {
    this.props.unloadPage();
  }

  render() {
    const { email, password } = this.props;

    return (
      <div className="login page">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="text-center">
                <h1>Sign In</h1>
                <Link to="register">Need an account?</Link>

                <hr />

                <ListErrors errors={this.props.errors} />

                <form
                  onSubmit={ev => {
                    ev.preventDefault();
                    this.props.submitLogin(email, password);
                  }}
                >
                  <fieldset>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Email"
                      value={this.props.email || ""}
                      onChange={this.props.changeEmail}
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      value={this.props.password || ""}
                      onChange={this.props.changePassword}
                    />
                  </fieldset>
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Sign In
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
