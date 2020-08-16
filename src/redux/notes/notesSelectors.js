import { createSelector } from "reselect";

const selectNotes = (state) => state.notes;
const selectCategories = (state) => state.categories;

export const selectFilteredNotes = createSelector(
  [selectNotes, selectCategories],
  (notes, categories) => {
    const { title } = categories.activeCategory;
    const selectedCategory = Boolean(title) ? title : "recent";
    return notes.allNotes[selectedCategory];
  }
);
