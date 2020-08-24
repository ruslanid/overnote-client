import NotesActionTypes from "./notesActionTypes";
import axios from "axios";

//
// FETCH RECENT NOTES
//
const fetchAllNotesStart = () => ({
  type: NotesActionTypes.FETCH_ALL_NOTES_START,
});

const fetchAllNotesSuccess = (notes) => ({
  type: NotesActionTypes.FETCH_ALL_NOTES_SUCCESS,
  payload: notes,
});

const fetchAllNotesFailure = (error) => ({
  type: NotesActionTypes.FETCH_ALL_NOTES_FAILURE,
  payload: error,
});

export const fetchAllNotes = () => {
  return (dispatch) => {
    dispatch(fetchAllNotesStart());

    axios
      .get("/api/notes")
      .then((res) => {
        dispatch(fetchAllNotesSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchAllNotesFailure(error.response.data));
      });
  };
};

//
// SAVE NOTE
//
const saveNoteStart = () => ({
  type: NotesActionTypes.SAVE_NOTE_START,
});

const saveNoteSuccess = (note) => ({
  type: NotesActionTypes.SAVE_NOTE_SUCCESS,
  payload: note,
});

const saveNoteFailure = (error) => ({
  type: NotesActionTypes.SAVE_NOTE_FAILURE,
  payload: error,
});

export const addNote = (note, category) => {
  return (dispatch) => {
    dispatch(saveNoteStart());

    axios
      .post(`/api/categories/${category.id}/notes`, note)
      .then((res) => dispatch(saveNoteSuccess(res.data)))
      .catch((error) => dispatch(saveNoteFailure(error.response.data)));
  };
};

export const updateNote = (note) => {
  return (dispatch) => {
    dispatch(saveNoteStart());

    axios
      .put(`/api/notes/${note.id}`, note)
      .then((res) => dispatch(saveNoteSuccess(res.data)))
      .catch((error) => dispatch(saveNoteFailure(error.response.data)));
  };
};

//
// DELETE NOTE
//
const deleteNoteStart = () => ({
  type: NotesActionTypes.DELETE_NOTE_START,
});

const deleteNoteSuccess = (note) => ({
  type: NotesActionTypes.DELETE_NOTE_SUCCESS,
  payload: note,
});

const deleteNoteFailure = (error) => ({
  type: NotesActionTypes.DELETE_NOTE_FAILURE,
  payload: error,
});

export const deleteNote = (note) => {
  return (dispatch) => {
    dispatch(deleteNoteStart());

    axios
      .delete(`/api/notes/${note.id}`)
      .then((res) => dispatch(deleteNoteSuccess(note)))
      .then((error) => dispatch(deleteNoteFailure(error.response.data)));
  };
};
