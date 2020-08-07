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
      .get(`/api/categories`)
      .then((res) => dispatch(fetchCategoriesSuccess(res.data)))
      .catch((error) => dispatch(fetchCategoriesFailure(error.response.data)));
  };
};
