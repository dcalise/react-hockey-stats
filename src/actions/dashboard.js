import { Auth, statsRef } from '../config/agent';
import { GET_STATS, UPDATE_STATS } from './types';

export const addPoint = (t) => dispatch => {
  let pointType;
  switch (t) {
    case 'g':
      pointType = 'goals';
      break;
    case 'a':
      pointType = 'assists';
      break
    default:
      break;
  }
  const currentUserStatsRef = statsRef.child(Auth.currentUser.uid);
  currentUserStatsRef.once('value', snapshot => {
    let stats = snapshot.val();

    let newTotal = 1;
    if (stats[pointType]) {
      newTotal = stats[pointType] + 1;
    }

    stats[pointType] = newTotal;

    currentUserStatsRef.update(stats).then(
      () => {
        dispatch({
          type: UPDATE_STATS,
          payload: stats
        });
      }
    );
  })
}

export const getStats = () => dispatch => {
  statsRef.child(Auth.currentUser.uid).once('value', snapshot => {
    const stats = snapshot.val();

    // set defaults to 0
    let payload = {
      goals: 0,
      assists: 0
    }

    // if user has stats
    if (stats) {
      payload = {
        goals: stats.goals || 0,
        assists: stats.assists || 0,
      }
    }

    // return stats
    dispatch({
      type: GET_STATS,
      payload
    });
  });

}