import React from 'react';
import { connect } from 'react-redux';
import { Auth } from '../config/agent';

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => {
    Auth.signOut().then(
      () => dispatch({ type: 'LOGOUT' }),
    );
  },
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' }),
});

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="settings page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>
                Profile
              </h1>
              <button
                type="button"
                onClick={this.props.onClickLogout}
                className="btn btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
