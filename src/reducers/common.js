const defaultState = {
  appName: 'Hockey Stats',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload || null,
      };
    case 'GET_CURRENT_USER_PROFILE':
      return {
        ...state,
        currentProfile: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        }
      }
    case 'REDIRECT':
      return { ...state, redirectTo: null };
    case 'LOGOUT':
      return { ...state, redirectTo: '/', currentUser: null };
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user,
      };
    default:
      return state;
  }
};
