export const saveNote = (notes, noteToSave) => {
  const noteExists = notes.find((note) => note.id === noteToSave.id);

  if (noteExists) {
    return notes.map((note) => (note.id === noteToSave.id ? noteToSave : note));
  } else {
    return [...notes, noteToSave];
  }
};
