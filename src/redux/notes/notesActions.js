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
// ADD NEW NOTE
//
const addNewNoteStart = () => ({
  type: NotesActionTypes.ADD_NEW_NOTE_START,
});

const addNewNoteSuccess = (notes) => ({
  type: NotesActionTypes.ADD_NEW_NOTE_SUCCESS,
  payload: notes,
});

const addNewNoteFailure = (error) => ({
  type: NotesActionTypes.ADD_NEW_NOTE_FAILURE,
  payload: error,
});

export const addNewNote = (note, category) => {
  return (dispatch) => {
    dispatch(addNewNoteStart());

    axios
      .post(`/api/categories/${category.id}/notes`, note)
      .then((res) => {
        console.log(res.data);
        dispatch(addNewNoteSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(addNewNoteFailure(error.response.data));
      });
  };
};
