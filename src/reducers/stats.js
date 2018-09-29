export default (state = {}, action) => {
  switch (action.type) {
    case 'DASHBOARD_UNLOADED':
      return {};
    case 'ADD_GOAL':
      return { ...state };
    case 'ADD_ASSIST':
      return { ...state };
    case 'GET_STATS':
      return { ...state, stats: action.payload };
    default:
      return state;
  }
}