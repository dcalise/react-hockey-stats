import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav-right">
        <li>
          <Link to="login">Sign In</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    )
  }
  return null;
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav-right">
        <li>
          <Link to="profile">Profile</Link>
        </li>
      </ul>
    )
  }
  return null;
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-main">
          <ul className="nav-left">
            <li>
              <Link to="/" className="logo">
                {this.props.appName}
              </Link>
            </li>
          </ul>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />

        </nav>
      </div>
    )
  }
}

export default Header;