export const addNote = (notes, noteToAdd) => {
  var oldNotes = notes[noteToAdd.category.title];
  if (!oldNotes) oldNotes = [];

  return {
    ...notes,
    [noteToAdd.category.title]: [...oldNotes, noteToAdd],
  };
};
