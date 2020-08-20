import React from "react";
import { Modal } from "semantic-ui-react";
import NoteForm from "../note-form/NoteForm";

const NewNoteModal = ({ trigger, category }) => {
  console.log("category", category);
  return (
    <Modal closeIcon trigger={trigger}>
      <Modal.Header>New Note</Modal.Header>
      <NoteForm category={category} />
    </Modal>
  );
};

export default NewNoteModal;
