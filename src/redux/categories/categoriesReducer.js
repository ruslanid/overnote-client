import CategoriesActionTypes from "./categoriesActionTypes";

import { updateCategory, deleteCategory } from "./categoriesUtils";

const INITIAL_STATE = {
  allCategories: [],
  editHidden: true,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  errorsFetching: {},
  errorsAdding: {},
  errorsDeleting: {},
  errorsUpdating: {},
  activeCategory: {},
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        allCategories: [],
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        allCategories: action.payload,
        errorsFetching: {},
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorsFetching: action.payload,
      };
    case CategoriesActionTypes.ADD_CATEGORY_START:
      return {
        ...state,
        isAdding: true,
      };
    case CategoriesActionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isAdding: false,
        allCategories: [...state.allCategories, action.payload],
        errorsAdding: {},
      };
    case CategoriesActionTypes.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isAdding: false,
        errorsAdding: action.payload,
      };
    case CategoriesActionTypes.TOGGLE_EDIT_CATEGORY_HIDDEN:
      return {
        ...state,
        editHidden: action.payload,
        errorsUpdating: action.payload === true && {},
      };
    case CategoriesActionTypes.UPDATE_CATEGORY_START:
      return {
        ...state,
        isUpdating: true,
      };
    case CategoriesActionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        editHidden: true,
        allCategories: updateCategory(state.allCategories, action.payload),
        errorsUpdating: {},
      };
    case CategoriesActionTypes.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        isUpdating: false,
        errorsUpdating: action.payload,
      };
    case CategoriesActionTypes.DELETE_CATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case CategoriesActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        allCategories: deleteCategory(state.allCategories, action.payload),
      };
    case CategoriesActionTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorsDeleting: action.payload,
      };
    case CategoriesActionTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
