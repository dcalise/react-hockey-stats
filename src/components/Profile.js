import ListErrors from './ListErrors';
import React from 'react';
import Auth from '../config/agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => {
    Auth.signOut().then(
      () => dispatch({ type: 'LOGOUT '}),
      (error) => console.log(error)
    )
  },
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' })
});

class Profile extends React.Component {
  render() {
    return (
      <div className="settings page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <button onClick={this.props.onClickLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
