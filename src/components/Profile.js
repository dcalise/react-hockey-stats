import React from 'react';
import { connect } from 'react-redux';
import { Auth } from '../config/agent';
import * as profileActions from '../actions/profile';

const mapStateToProps = state => ({
  ...state.profile,
  currentUser: state.common.currentUser,
  currentProfile: state.common.currentProfile 
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => {
    Auth.signOut().then(
      () => dispatch({ type: 'LOGOUT' }),
    );
  },
  onSubmit: payload => dispatch(
    profileActions.saveProfile(payload)
  ),
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' }),
});

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: props.currentProfile ? props.currentProfile.firstName : '',
      lastName: props.currentProfile ? props.currentProfile.lastName : ''
    }

    this.changeFirstName = ev => this.setState({ firstName: ev.target.value });
    this.changeLastName = ev => this.setState({ lastName: ev.target.value });
    this.submitForm = () => (ev) => {
      ev.preventDefault();

      const {firstName, lastName} = this.state;
      this.props.onSubmit({firstName, lastName});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentProfile) {
      const {firstName, lastName} = nextProps.currentProfile;
      this.setState({firstName, lastName});
    }
  }

  render() {
    const { firstName, lastName } = this.props;

    return (
      <div className="settings page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>
                Profile
              </h1>
              <form onSubmit={this.submitForm(firstName, lastName)}>
                <fieldset>
                  <input 
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.changeFirstName}
                  />
                </fieldset>
                <fieldset>
                  <input 
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.changeLastName}
                  />
                </fieldset>

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={this.props.inProgress}
                >
                  Save
                </button>
              </form>

              <hr/>
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
