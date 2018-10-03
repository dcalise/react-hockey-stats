import { DASHBOARD_UNLOADED, ADD_GOAL, ADD_ASSIST, GET_STATS, UPDATE_STATS } from "../actions/types";

const initialState = {
  goals: 0,
  assists: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_UNLOADED:
      return {};
    case ADD_GOAL:
      return { ...state };
    case ADD_ASSIST:
      return { ...state };
    case UPDATE_STATS:
    case GET_STATS:
      return {
        ...state, 
        goals: action.payload.goals,
        assists: action.payload.assists
      };
    default:
      return state;
  }
}