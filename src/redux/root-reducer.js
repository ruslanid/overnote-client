import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
