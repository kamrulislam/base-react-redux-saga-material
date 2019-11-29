import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
import counter from "./counter";
import quiz from "./quiz";

export default combineReducers({ counter, quiz });
