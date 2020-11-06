import { createStore, combineReducers } from "redux";
import userReducer from "./reducer/user";

const allReducer = {
  user: userReducer,
};
const rootReducer = combineReducers(allReducer);
const store = createStore(rootReducer);
export default store;
