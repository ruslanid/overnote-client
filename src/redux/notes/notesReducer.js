import NotesActionTypes from "./notesActionTypes";

const INITIAL_STATE = {
  allNotes: {},
  isFetching: false,
  errorsFetching: {},
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
