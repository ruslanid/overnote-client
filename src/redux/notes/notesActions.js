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
        console.log(res);
        dispatch(fetchRecentNotesSuccess({ recent: res.data }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchRecentNotesFailure(error.response.data));
      });
  };
};
