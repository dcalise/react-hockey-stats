import { profilesRef } from '../config/agent';

export const saveProfile = profile => async dispatch => {
  profilesRef.push().set(profile);
}

export const getProfiles = () => async dispatch => {
  profilesRef.on('value', snapshot => {
    dispatch({
      type: 'GET_PROFILES',
      payload: snapshot.val()
    });
  })
}