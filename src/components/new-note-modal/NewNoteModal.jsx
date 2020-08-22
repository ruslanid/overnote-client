import React from "react";
import { Modal } from "semantic-ui-react";
import NoteForm from "../note-form/NoteForm";

const NewNoteModal = ({ trigger }) => {
  return (
    <Modal closeIcon trigger={trigger}>
      <Modal.Header>New Note</Modal.Header>
      <NoteForm />
    </Modal>
  );
};

export default NewNoteModal;
