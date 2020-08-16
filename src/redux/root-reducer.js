import { combineReducers } from "redux";
import categoriesReducer from "./categories/categoriesReducer";
import notesReducer from "./notes/notesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  notes: notesReducer,
});

export default rootReducer;
