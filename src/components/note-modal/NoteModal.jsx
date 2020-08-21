import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import NoteForm from "../note-form/NoteForm";

const NoteModal = ({ trigger, note, note: { title } }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{title}</Modal.Header>
      <NoteForm note={note} setOpen={setOpen} />
    </Modal>
  );
};

export default NoteModal;
