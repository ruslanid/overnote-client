import CategoriesActionTypes from "./categoriesActionTypes";
import axios from "axios";

//
// FETCH CATEGORIES
//
const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_START,
});

const fetchCategoriesSuccess = (categories) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailure = (error) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());

    axios
      .get("/api/categories")
      .then((res) => dispatch(fetchCategoriesSuccess(res.data)))
      .catch((error) => dispatch(fetchCategoriesFailure(error.response.data)));
  };
};

//
// ADD CATEGORY
//
const addCategoryStart = () => ({
  type: CategoriesActionTypes.ADD_CATEGORY_START,
});

const addCategorySuccess = (category) => ({
  type: CategoriesActionTypes.ADD_CATEGORY_SUCCESS,
  payload: category,
});

const addCategoryFailure = (error) => ({
  type: CategoriesActionTypes.ADD_CATEGORY_FAILURE,
  payload: error,
});

export const addCategory = (category) => {
  return (dispatch) => {
    dispatch(addCategoryStart());

    axios
      .post("/api/categories", category)
      .then((res) => dispatch(addCategorySuccess(res.data)))
      .catch((error) => dispatch(addCategoryFailure(error.response.data)));
  };
};
