import { Auth, statsRef } from '../config/agent';

export const addPoint = (t) => dispatch => {
  let pointType;
  switch (t) {
    case 'g':
      pointType = 'goals';
      break;
    case 'a':
      pointType = 'assist';
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

    currentUserStatsRef.update(stats);
  })
}