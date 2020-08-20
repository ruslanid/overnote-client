import NotesActionTypes from "./notesActionTypes";
import { addNote } from "./notesUtils";

const INITIAL_STATE = {
  allNotes: {},
  isAdding: false,
  isFetching: false,
  errorsAdding: {},
  errorsFetching: {},
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NEW_NOTE_START:
      return {
        ...state,
        isAdding: true,
        errorsAdding: {},
      };
    case NotesActionTypes.ADD_NEW_NOTE_SUCCESS:
      return {
        ...state,
        isAdding: false,
        allNotes: addNote(state.allNotes, action.payload),
      };
    case NotesActionTypes.ADD_NEW_NOTE_FAILURE:
      return {
        ...state,
        isAdding: false,
        errorsAdding: action.payload,
      };
    case NotesActionTypes.FETCH_RECENT_NOTES_START:
      return {
        ...state,
        isFetching: true,
        errorsFetching: {},
      };
    case NotesActionTypes.FETCH_RECENT_NOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allNotes: { ...state.allNotes, ...action.payload },
      };
    case NotesActionTypes.FETCH_RECENT_NOTES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorsFetching: action.payload,
      };
    case NotesActionTypes.FETCH_CATEGORY_NOTES_START:
      return {
        ...state,
        isFetching: true,
        errorsFetching: {},
      };
    case NotesActionTypes.FETCH_CATEGORY_NOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allNotes: { ...state.allNotes, ...action.payload },
      };
    case NotesActionTypes.FETCH_CATEGORY_NOTES_FAILURE:
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
