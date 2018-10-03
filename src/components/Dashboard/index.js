import React from 'react';
import { connect } from 'react-redux';
import * as dashboardActions from '../../actions/dashboard';
import PropTypes from 'prop-types';
import Schedule from './Schedule';

const mapStateToProps = state => ({
  stats: { ...state.stats }
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(
    dashboardActions.getStats()
  ),
  onAddGoal: () => dispatch(
    dashboardActions.addPoint('g')
  ),
  onAddAssist: () => dispatch(
    dashboardActions.addPoint('a')
  ),
  onUnload: () => dispatch({ type: 'DASHBOARD_UNLOADED' })
});

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {

    const { goals, assists } = this.props.stats;

    return (
      <div className="dashboard page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Dashboard</h1>

              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.onAddGoal}
              >
                Add Goal
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.onAddAssist}
              >
                Add Assist
              </button>

              <div className="row">
                <div className="col-sm-12">
                  Goals: {goals} Assists: {assists}
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {/* <Schedule /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Dashboard.propTypes = {
//   stats: {
//     goals: PropTypes.number,
//     assists: PropTypes.number,
//   }
// }

// Dashboard.defaultProps = {
//   stats: {
//     goals: 0,
//     assists: 0
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);