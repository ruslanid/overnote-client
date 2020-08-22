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

const saveNoteSuccess = (notes) => ({
  type: NotesActionTypes.SAVE_NOTE_SUCCESS,
  payload: notes,
});

const saveNoteFailure = (error) => ({
  type: NotesActionTypes.SAVE_NOTE_FAILURE,
  payload: error,
});

export const saveNote = (note, category) => {
  return (dispatch) => {
    dispatch(saveNoteStart());

    axios
      .post(`/api/categories/${category.id}/notes`, note)
      .then((res) => {
        dispatch(saveNoteSuccess(res.data));
      })
      .catch((error) => {
        dispatch(saveNoteFailure(error.response.data));
      });
  };
};
