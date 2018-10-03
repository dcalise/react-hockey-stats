import { APP_LOAD, GET_CURRENT_USER_PROFILE, REDIRECT, LOGOUT, LOGIN, REGISTER } from "../actions/types";

const initialState = {
  appName: 'Hockey Stats',
  currentProfile: {
    firstName: '',
    lastName: '',
    jerseyNumber: null,
    gender: '',
    position: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload || null,
      };
    case GET_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentProfile: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          jerseyNumber: action.payload.jerseyNumber,
          gender: action.payload.gender,
          position: action.payload.position
        }
      }
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/', currentUser: null };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user,
      };
    default:
      return state;
  }
};
