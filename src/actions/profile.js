import { Auth, profilesRef } from '../config/agent';

export const saveProfile = payload => dispatch => {
  profilesRef.child(Auth.currentUser.uid).update(payload).then(
    () => dispatch({ type: 'UPDATE_PROFILE'}),
    error => console.error(error)
  )
}

export const getProfile = uid => dispatch => {
  profilesRef.child(uid).once('value', snapshot => {
    dispatch({
      type: 'GET_PROFILE',
      payload: snapshot.val()
    });
  })
}

export const getProfiles = () => async dispatch => {
  profilesRef.on('value', snapshot => {
    dispatch({
      type: 'GET_PROFILES',
      payload: snapshot.val()
    });
  })
}