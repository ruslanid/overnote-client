export const updateCategory = (categories, categoryToUpdate) => {
  return categories.map((category) =>
    category.id === categoryToUpdate.id ? categoryToUpdate : category
  );
};
