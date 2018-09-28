import { usersRef } from '../config/agent';

export const updateUserProfile = userProfile => async dispatch => {
  usersRef.push().set(userProfile);
};