export default (state = {}, action) => {
  switch (action.type) {
    case 'PROFILE_PAGE_UNLOADED':
      return {};
    case 'UPDATE_PROFILE':
      return { ...state};
    case 'GET_PROFILE':
      return { ...state, profile: action.payload};
    default:
      return state;
  }
};
