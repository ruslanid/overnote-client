import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectAllCategories = createSelector(
  [selectCategories],
  (categories) => categories.allCategories
);

export const selectIsAdding = createSelector(
  [selectCategories],
  (categories) => categories.isAdding
);

export const selectErrorsAdding = createSelector(
  [selectCategories],
  (categories) => categories.errorsAdding
);
