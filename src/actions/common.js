import { Auth, profilesRef } from '../config/agent';

export const onLoad = () => dispatch => {
  Auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({ type: 'APP_LOAD', payload: user });
      profilesRef.child(user.uid).once('value', snapshot => {
        dispatch({
          type: 'GET_CURRENT_USER_PROFILE',
          payload: snapshot.val()
        });
      });
    } else {
      dispatch({ type: 'APP_LOAD', payload: null });
    }
  });
}