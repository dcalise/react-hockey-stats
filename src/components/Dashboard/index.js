import React from 'react';
import { connect } from 'react-redux';
import * as dashboardActions from '../../actions/dashboard';

const mapStateToProps = state => ({
  ...state.stats,
  stats: state.stats
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
  constructor(props) {
    super(props);

    this.state = {
      goals: props.goals ? props.goals : '',
      assists: props.assists ? props.assists: ''
    }

  }

  componentWillMount() {
    this.props.onLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stats) {
      const {goals, assists} = nextProps.stats;
      this.setState({goals, assists});
    }
  }

  render() {

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
                  Goals: {this.state.goals} Assists: {this.state.assists}
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