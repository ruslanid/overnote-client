import CategoriesActionTypes from "./categoriesActionTypes";

const INITIAL_STATE = {
  allCategories: [],
  errorsFetching: {},
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
    default:
      return state;
  }
};

export default categoriesReducer;
