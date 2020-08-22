import CategoriesActionTypes from "./categoriesActionTypes";
import axios from "axios";

//
// SET ACTIVE CATEGORY
//
export const setActiveCategory = (category) => ({
  type: CategoriesActionTypes.SET_ACTIVE_CATEGORY,
  payload: category,
});

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
      .then((res) => {
        dispatch(addCategorySuccess(res.data));
        dispatch(setActiveCategory(res.data));
      })
      .catch((error) => dispatch(addCategoryFailure(error.response.data)));
  };
};

//
// TOGGLE EDIT HIDDEN
//
export const toggleEditHidden = (toggleValue) => ({
  type: CategoriesActionTypes.TOGGLE_EDIT_CATEGORY_HIDDEN,
  payload: toggleValue,
});

//
// UPDATE CATEGORY
//
const updateCategoryStart = () => ({
  type: CategoriesActionTypes.UPDATE_CATEGORY_START,
});

const updateCategorySuccess = (category) => ({
  type: CategoriesActionTypes.UPDATE_CATEGORY_SUCCESS,
  payload: category,
});

const updateCategoryFailure = (error) => ({
  type: CategoriesActionTypes.UPDATE_CATEGORY_FAILURE,
  payload: error,
});

export const updateCategory = (category) => {
  return (dispatch) => {
    dispatch(updateCategoryStart());

    axios
      .put(`/api/categories/${category.id}`, category)
      .then((res) => {
        dispatch(updateCategorySuccess(res.data));
      })
      .catch((error) => dispatch(updateCategoryFailure(error.response.data)));
  };
};

//
// DELETE CATEGORY
//
const deleteCategoryStart = () => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_START,
});

const deleteCategorySuccess = (category) => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_SUCCESS,
  payload: category,
});

const deleteCategoryFailure = (error) => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_FAILURE,
  payload: error,
});

export const deleteCategory = (category) => {
  return (dispatch) => {
    dispatch(deleteCategoryStart());

    axios
      .delete(`/api/categories/${category.id}`)
      .then((res) => dispatch(deleteCategorySuccess(category)))
      .catch((error) => dispatch(deleteCategoryFailure(error.response.data)));
  };
};
