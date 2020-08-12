import CategoriesActionTypes from "./categoriesActionTypes";

const INITIAL_STATE = {
  allCategories: [],
  isAdding: false,
  isDeleting: false,
  errorsFetching: {},
  errorsAdding: {},
  errorsDeleting: {},
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
    case CategoriesActionTypes.DELETE_CATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case CategoriesActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        allCategories: state.allCategories.filter(category => category !== action.payload)
      }
    case CategoriesActionTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorsDeleting: action.payload
      }
    default:
      return state;
  }
};

export default categoriesReducer;
