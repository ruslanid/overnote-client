import NotesActionTypes from "./notesActionTypes";
import axios from "axios";

//
// FETCH RECENT NOTES
//
const fetchRecentNotesStart = () => ({
  type: NotesActionTypes.FETCH_RECENT_NOTES_START,
});

const fetchRecentNotesSuccess = (notes) => ({
  type: NotesActionTypes.FETCH_RECENT_NOTES_SUCCESS,
  payload: notes,
});

const fetchRecentNotesFailure = (error) => ({
  type: NotesActionTypes.FETCH_RECENT_NOTES_FAILURE,
  payload: error,
});

export const fetchRecentNotes = () => {
  return (dispatch) => {
    dispatch(fetchRecentNotesStart());

    axios
      .get("/api/notes", { params: { q: "recent" } })
      .then((res) => {
        dispatch(fetchRecentNotesSuccess({ recent: res.data }));
      })
      .catch((error) => {
        dispatch(fetchRecentNotesFailure(error.response.data));
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
        console.log(res.data);
        dispatch(saveNoteSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(saveNoteFailure(error.response.data));
      });
  };
};
