import React from "react";
import { connect } from "react-redux";
import { addPoint, getStats } from "../../actions/stats";
import { unloadDashboard } from "../../actions/dashboard";
import PropTypes from "prop-types";
// import Schedule from './Schedule';

const mapStateToProps = state => ({
  stats: { ...state.stats }
});

const mapDispatchToProps = {
  getStats,
  addGoal: () => addPoint("g"),
  addAssist: () => addPoint("a"),
  unloadDashboard
};

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getStats();
  }

  componentWillUnmount() {
    this.props.unloadDashboard();
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
                onClick={() => this.props.addGoal()}
              >
                Add Goal
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.addAssist()}
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
            <div className="col-sm-12">{/* <Schedule /> */}</div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  stats: PropTypes.shape({
    goals: PropTypes.number,
    assists: PropTypes.number
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
