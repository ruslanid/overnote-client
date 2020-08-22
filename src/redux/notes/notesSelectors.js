import { createSelector } from "reselect";

const selectNotes = (state) => state.notes;
const selectCategories = (state) => state.categories;

export const selectFilteredNotes = createSelector(
  [selectNotes, selectCategories],
  (notes, categories) => {
    const activeCategory = categories.activeCategory;
    return Object.keys(activeCategory).length === 0
      ? notes.allNotes
      : notes.allNotes.filter(
          (note) => note.category?.title === activeCategory.title
        );
  }
);
