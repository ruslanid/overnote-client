import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { addNewNote } from "../../redux/notes/notesActions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActiveCategory } from "../../redux/categories/categoriesSelectors";

const NoteForm = ({ note, dispatch, category }) => {
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
    dispatch(addNewNote(noteData, category));
  };

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
              id="form-input-title"
            />
            <Form.TextArea
              // error="Please enter your last name"
              name="description"
              onChange={handleChange}
              label="Description"
              placeholder="Description..."
              value={description}
              id="form-input-description"
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleSubmit} color="blue">
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
