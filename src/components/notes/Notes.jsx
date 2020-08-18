import React from "react";
import { Card, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Notes.scss";

import Note from "../note/Note";

import { selectFilteredNotes } from "../../redux/notes/notesSelectors";
import { selectActiveCategory } from "../../redux/categories/categoriesSelectors";

const Notes = ({ notes, category: { title } }) => (
  <div className="Notes">
    <Header as="h3" color="red">
      {Boolean(title) ? title : "Recent"}
    </Header>
    {notes.length === 0 && <div>No notes</div>}
    <Card.Group>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </Card.Group>
  </div>
);

const mapStateToProps = createStructuredSelector({
  notes: selectFilteredNotes,
  category: selectActiveCategory,
});

export default connect(mapStateToProps)(Notes);
