import { Auth, profilesRef } from '../config/agent';
import { UPDATE_PROFILE, GET_CURRENT_USER_PROFILE, GET_PROFILE, GET_PROFILES } from './types';

export const saveProfile = payload => dispatch => {
  profilesRef.child(Auth.currentUser.uid).update(payload).then(
    () => {
      dispatch({ type: UPDATE_PROFILE })
      dispatch({ type: GET_CURRENT_USER_PROFILE, payload})
    },
    error => console.error(error)
  )
}

export const getProfile = uid => dispatch => {
  profilesRef.child(uid).once('value', snapshot => {
    dispatch({
      type: GET_PROFILE,
      payload: snapshot.val()
    });
  })
}

export const getProfiles = () => async dispatch => {
  profilesRef.on('value', snapshot => {
    dispatch({
      type: GET_PROFILES,
      payload: snapshot.val()
    });
  })
}