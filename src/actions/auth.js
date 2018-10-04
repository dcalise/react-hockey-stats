import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  REGISTER
} from "./types";
import {
  Auth
} from '../config/agent';

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

export const changeConfirmPassword = ev => dispatch => {
  dispatch({
    type: UPDATE_FIELD_AUTH,
    key: 'confirmPassword',
    value: ev.target.value
  })
}

export const submitLogin = (email, password) => dispatch => {
  Auth.signInWithEmailAndPassword(email, password).then((payload) => {
    dispatch({
      type: LOGIN,
      payload
    });
  }, (error) => {
    dispatch({
      type: LOGIN,
      error
    });
  });
}

export const submitRegister = (email, password, confirmPassword) => dispatch => {
  if (password !== confirmPassword) {
    const error = {
      message: 'The passwords do not match'
    };
    dispatch({
      type: REGISTER,
      error
    });
  } else {
    Auth.createUserWithEmailAndPassword(email, password).then((payload) => {
      dispatch({
        type: REGISTER,
        payload
      });
    }, (error) => {
      dispatch({
        type: REGISTER,
        error
      });
    });
  }
}

export const unloadRegisterPage = () => dispatch => dispatch({
  type: LOGIN_PAGE_UNLOADED
});

export const unloadLoginPage = () => dispatch => dispatch({
  type: LOGIN_PAGE_UNLOADED
});