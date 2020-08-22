import NotesActionTypes from "./notesActionTypes";
import { saveNote } from "./notesUtils";

const INITIAL_STATE = {
  allNotes: [],
  isAdding: false,
  isFetching: false,
  errorsSaving: {},
  errorsFetching: {},
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.SAVE_NOTE_START:
      return {
        ...state,
        isSaving: true,
        errorsSaving: {},
      };
    case NotesActionTypes.SAVE_NOTE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        allNotes: saveNote(state.allNotes, action.payload),
      };
    case NotesActionTypes.SAVE_NOTE_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorsSaving: action.payload,
      };
    case NotesActionTypes.FETCH_ALL_NOTES_START:
      return {
        ...state,
        isFetching: true,
        errorsFetching: {},
      };
    case NotesActionTypes.FETCH_ALL_NOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allNotes: action.payload,
      };
    case NotesActionTypes.FETCH_ALL_NOTES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorsFetching: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
