import React from 'react';
import { connect } from 'react-redux';
import { Auth } from '../../config/agent';
import * as profileActions from '../../actions/profile';
import PropTypes from 'prop-types';

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
      lastName: props.currentProfile ? props.currentProfile.lastName : '',
      jerseyNumber: props.currentProfile ? props.currentProfile.jerseyNumber : '',
      gender: props.currentProfile ? props.currentProfile.gender : '',
      position: props.currentProfile ? props.currentProfile.position : [],
      email: props.currentUser.email
    }

    this.changeFirstName = ev => this.setState({ firstName: ev.target.value });
    this.changeLastName = ev => this.setState({ lastName: ev.target.value });
    this.changeJerseyNumber = ev => this.setState({ jerseyNumber: ev.target.value });
    this.changeGender = ev => this.setState({ gender: ev.target.value });
    this.changePosition = ev => {
      const position = [...ev.target.options].filter(({selected}) => selected).map(({value}) => value);
      this.setState({ position });
    }
    this.submitForm = () => (ev) => {
      ev.preventDefault();

      const {firstName, lastName, jerseyNumber, gender, position} = this.state;
      this.props.onSubmit({firstName, lastName, jerseyNumber, gender, position});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentProfile) {
      const {firstName, lastName, jerseyNumber, gender, position} = nextProps.currentProfile;
      this.setState({firstName, lastName, jerseyNumber, gender, position});
    }
  }

  render() {
    const { firstName, lastName, jerseyNumber, gender, position } = this.props;

    return (
      <div className="settings page">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h1>
                Profile
              </h1>
              <form onSubmit={this.submitForm(firstName, lastName, jerseyNumber, gender, position)}>
                <h4>Personal</h4>
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

                <fieldset>
                  <input 
                    className="form-input"
                    type="email"
                    value={this.state.email}
                    readOnly
                  />
                </fieldset>

                <fieldset>
                  <select
                    className="form-input"
                    value={this.state.gender}
                    onChange={this.changeGender}
                  >
                    <option value="0">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </fieldset>

                <h4>Hockey</h4>
                <fieldset>
                  <select
                    className="form-input"
                    multiple
                    value={this.state.position}
                    onChange={this.changePosition}
                  >
                    <option value="fwd">Forward</option>
                    <option value="def">Defense</option>
                    <option value="gol">Goaltender</option>
                  </select>
                </fieldset>

                <fieldset>
                  <input 
                    className="form-input"
                    type="text"
                    placeholder="Jersey Number"
                    value={this.state.jerseyNumber}
                    onChange={this.changeJerseyNumber}
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

Profile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  jerseyNumber: PropTypes.number,
  gender: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
