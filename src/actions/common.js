import { Auth } from '../config/agent';

export const onLoad = () => dispatch => {
  Auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({ type: 'APP_LOAD', payload: user });
      // load user profile
    } else {
      dispatch({ type: 'APP_LOAD', payload: null });
    }
  });
}