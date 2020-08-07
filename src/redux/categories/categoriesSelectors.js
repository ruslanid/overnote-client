import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectAllCategories = createSelector(
  [selectCategories],
  categories => categories.allCategories
);
