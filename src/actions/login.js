import { UPDATE_FIELD_AUTH, LOGIN, LOGIN_PAGE_UNLOADED } from "./types";
import { Auth } from '../config/agent';

export const changeEmail = ev => dispatch => {
  dispatch({
    type: UPDATE_FIELD_AUTH,
    key: 'email',
    value: ev.target.value
  })
}

export const changePassword = ev => dispatch => {
  dispatch({
    type: UPDATE_FIELD_AUTH,
    key: 'password',
    value: ev.target.value
  })
}

export const submitLogin = (email, password) => dispatch => {
  Auth.signInWithEmailAndPassword(email, password).then((payload) => {
    dispatch({ type: LOGIN, payload });
  }, (error) => {
    dispatch({ type: LOGIN, error });
  });
}

export const unloadPage = () => dispatch => dispatch({ type: LOGIN_PAGE_UNLOADED });