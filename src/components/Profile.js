import React from 'react';
import { Auth } from '../config/agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => {
    Auth.signOut().then(
      () => dispatch({ type: 'LOGOUT'}),
      (error) => console.log(error)
    )
  },
  onChangeFirstName: value => dispatch({ type: 'UPDATE_FIELD_PROFILE', key: 'firstName', value }),
  updateUserProfile: (userProfile) => {
    console.log(userProfile);
  },
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' }),
});

class Profile extends React.Component {
  constructor() {
    super();
    this.changeFirstName = ev => this.props.onChangeFirstName(ev.target.value);
    this.onClickSaveProfile = userProfile => ev => {
      ev.preventDefault();
      this.props.updateUserProfile(userProfile);
    }
  };

  render() {
    const firstName = this.props.firstName;

    return (
      <div className="settings page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Profile</h1>
              <form onSubmit={this.onClickSaveProfile(firstName)}>
                <fieldset>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                    value={this.props.firstName || ''}
                    onChange={this.changeFirstName} />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-secondary"
                >
                  Save Profile
                </button>
              </form>

              <hr />


              <button
                onClick={this.props.onClickLogout}
                className="btn btn-secondary">
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
