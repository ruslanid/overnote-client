export const updateCategory = (categories, categoryToUpdate) => {
  return categories.map((category) =>
    category.id === categoryToUpdate.id ? categoryToUpdate : category
  );
};

export const deleteCategory = (categories, categoryToDelete) => {
  return categories.filter((category) => category !== categoryToDelete);
};
