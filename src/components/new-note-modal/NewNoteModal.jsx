import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import NoteForm from "../note-form/NoteForm";

const NewNoteModal = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>New Note</Modal.Header>
      <NoteForm setOpen={setOpen} />
    </Modal>
  );
};

export default NewNoteModal;
