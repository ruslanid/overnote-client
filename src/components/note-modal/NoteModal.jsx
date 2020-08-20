import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NoteForm from "../note-form/NoteForm";

const saveNote = () => {};
const deleteNote = () => {};

const NoteModal = ({ trigger, note, category, note: { title } }) => (
  <Modal closeIcon trigger={trigger}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <NoteForm note={note} category={category} />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => deleteNote(false)} color="red">
        Delete
      </Button>
      <Button onClick={() => saveNote(false)} color="blue">
        Save
      </Button>
    </Modal.Actions>
  </Modal>
);

export default NoteModal;
