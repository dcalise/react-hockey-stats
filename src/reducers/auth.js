import { FETCH_USER, LOGIN, REGISTER, LOGIN_PAGE_UNLOADED, REGISTER_PAGE_UNLOADED, ASYNC_START, UPDATE_FIELD_AUTH } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        currentUser: action.payload || null,
      };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.error.message : null,
      };
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true };
      }
      return state;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
