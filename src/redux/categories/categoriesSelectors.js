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

export const selectIsDeleting = createSelector(
  [selectCategories],
  (categories) => categories.isDeleting
);

export const selectEditHidden = createSelector(
  [selectCategories],
  (categories) => categories.editHidden
);

export const selectIsUpdating = createSelector(
  [selectCategories],
  (categories) => categories.isUpdating
);

export const selectErrorsUpdating = createSelector(
  [selectCategories],
  (categories) => categories.errorsUpdating
);