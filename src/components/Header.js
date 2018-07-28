import React from 'react';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav-right">
        <li>
          <a href="">Sign In</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
      </ul>
    )
  }
  return null;
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>logged in</div>
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
              <a href="" className="logo">
                {this.props.appName}
              </a>
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