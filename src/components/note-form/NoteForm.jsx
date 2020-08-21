import React, { useState } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { saveNote } from "../../redux/notes/notesActions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActiveCategory } from "../../redux/categories/categoriesSelectors";

const NoteForm = ({ note, dispatch, category, setOpen }) => {
  const [noteData, setNoteData] = useState({
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
    dispatch(saveNote(noteData, category));
  };

  const deleteNote = () => {};

  return (
    <>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              // error={{ content: "Please enter a title", pointing: "below" }}
              name="title"
              onChange={handleChange}
              label="Title"
              placeholder="Title..."
              value={title}
            />
            <Form.TextArea
              // error="Please enter your last name"
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
        <Button floated="left" onClick={() => deleteNote(false)} color="red">
          <Icon name="trash" />
          Delete
        </Button>
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
});

export default connect(mapStateToProps)(NoteForm);