import React from "react";
import { Button, Card, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Notes.scss";

import Note from "../note/Note";
import NoteModal from "../note-modal/NoteModal";
import NewNoteModal from "../new-note-modal/NewNoteModal";

import { selectFilteredNotes } from "../../redux/notes/notesSelectors";
import { selectActiveCategory } from "../../redux/categories/categoriesSelectors";

const Notes = ({ notes, category: { title } }) => (
  <div className="Notes">
    <Header as="h2" color="grey">
      {Boolean(title) ? title : "All Notes"}
    </Header>
    {title && (
      <NewNoteModal
        trigger={
          <Button color="blue" floating="right">
            New Note
          </Button>
        }
      />
    )}
    {notes.length === 0 && <div>No notes</div>}
    <Card.Group>
      {notes.map((note) => (
        <NoteModal key={note.id} note={note} trigger={<Note note={note} />} />
      ))}
    </Card.Group>
  </div>
);

const mapStateToProps = createStructuredSelector({
  notes: selectFilteredNotes,
  category: selectActiveCategory,
});

export default connect(mapStateToProps)(Notes);
