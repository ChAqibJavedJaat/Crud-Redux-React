import { combineReducers } from "redux";
import { userReducer } from "./actionReducer";

export const rootReducer = combineReducers({
  root : userReducer,
});
