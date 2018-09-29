import React from 'react';
import { connect } from 'react-redux';
import * as dashboardActions from '../../actions/dashboard';

const mapStateToProps = state => ({
  ...state.stats
});

const mapDispatchToProps = dispatch => ({
  onAddGoal: () => dispatch(
    dashboardActions.addPoint('g')
  ),
  onAddAssist: () => dispatch(
    dashboardActions.addPoint('a')
  ),
  onUnload: () => dispatch({ type: 'DASHBOARD_UNLOADED' })
});

class Dashboard extends React.Component {
  render() {
    return (
      <div className="home page">
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
                  Goals: Assists:
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);