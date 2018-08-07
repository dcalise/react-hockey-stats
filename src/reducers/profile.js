export default (state = {}, action) => {
  switch (action.type) {
    case 'PROFILE_PAGE_UNLOADED':
      return {};
    // case 'ASYNC_START':
    //   if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
    //     return { ...state, inProgress: true };
    //   }
    //   return state;
    case 'UPDATE_FIELD_PROFILE':
      console.log(...state);
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
