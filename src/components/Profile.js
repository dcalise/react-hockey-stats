import React from 'react';
import { connect } from 'react-redux';
import { Auth } from '../config/agent';
import { saveProfile } from '../actions/profile';

const mapStateToProps = state => ({
  ...state.profile,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => {
    Auth.signOut().then(
      () => dispatch({ type: 'LOGOUT' }),
    );
  },
  onChangeFirstName: value => dispatch({ type: 'UPDATE_FIELD_PROFILE', key: 'firstName', value }),
  onChangeLastName: value => dispatch({ type: 'UPDATE_FIELD_PROFILE', key: 'lastName', value }),
  onSubmit: (firstName, lastName) => {
    console.log(firstName, lastName);
  },
  onUnload: () => dispatch({ type: 'PROFILE_PAGE_UNLOADED' }),
});

class Profile extends React.PureComponent {
  constructor() {
    super();
    
    this.changeFirstName = ev => this.props.onChangeFirstName(ev.target.value);
    this.changeLastName = ev => this.props.onChangeLastName(ev.target.value);
    this.submitForm = (firstName, lastName) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(firstName, lastName);
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
                    value={this.props.firstName || ''}
                    onChange={this.changeFirstName}
                  />
                </fieldset>
                <fieldset>
                  <input 
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    value={this.props.lastName || ''}
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
