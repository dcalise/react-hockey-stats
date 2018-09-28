export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD_PROFILE':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
