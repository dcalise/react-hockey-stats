import { DASHBOARD_UNLOADED } from "./types";

export const unloadDashboard = () => dispatch => {
  dispatch({ type: DASHBOARD_UNLOADED });
}