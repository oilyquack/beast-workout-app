import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  UserReducer,
  sessionsReducer
});
