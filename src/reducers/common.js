const defaultState = {
  appName: 'Hockey Stats',
  token: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload || null
      }
    case 'LOGOUT':
      return { ...state, redirectTo: '/', currentUser: null };
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user
      };
    default:
      return state;
  }
}