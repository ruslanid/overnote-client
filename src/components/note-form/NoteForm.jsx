import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectActiveCategory } from "../../redux/categories/categoriesSelectors";
import { selectErrorsSaving } from "../../redux/notes/notesSelectors";
import {
  addNote,
  updateNote,
  deleteNote,
} from "../../redux/notes/notesActions";

const NoteForm = ({ note, dispatch, category, setOpen, errors }) => {
  const [noteData, setNoteData] = useState({
    id: note?.id || 0,
    title: note?.title || "",
    description: note?.description || "",
  });

  const { title, description } = noteData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    note
      ? dispatch(updateNote(noteData))
      : dispatch(addNote(noteData, category));
  };

  return (
    <>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              error={errors.title}
              name="title"
              onChange={handleChange}
              label="Title"
              placeholder="Title..."
              value={title}
            />

            <Form.TextArea
              name="description"
              onChange={handleChange}
              label="Description"
              placeholder="Description..."
              value={description}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {note && (
          <Button
            floated="left"
            onClick={() => dispatch(deleteNote(note))}
            color="red"
          >
            <Icon name="trash" />
            Delete
          </Button>
        )}
        <Button onClick={() => setOpen(false)}>
          <Icon name="remove" />
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="blue">
          <Icon name="save" />
          Save
        </Button>
      </Modal.Actions>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  category: selectActiveCategory,
  errors: selectErrorsSaving,
});

export default connect(mapStateToProps)(NoteForm);
