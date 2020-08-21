export const saveNote = (notes, noteToSave) => {
  var oldNotes = notes[noteToSave.category.title];
  if (!oldNotes) oldNotes = [];

  return {
    ...notes,
    [noteToSave.category.title]: [...oldNotes, noteToSave],
  };
};
