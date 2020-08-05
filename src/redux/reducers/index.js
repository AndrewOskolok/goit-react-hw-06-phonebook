import { combineReducers } from "redux";
import items from "./itemsReducer";
import filter from "./filterReducer";

const rootReducer = combineReducers({
  items,
  filter,
});

export default rootReducer;
