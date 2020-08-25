import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

import NoteForm from "../note-form/NoteForm";

const NoteModal = ({ trigger, note }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{`${note ? "Edit" : "New"}`} Note</Modal.Header>
      <NoteForm note={note} setOpen={setOpen} />
    </Modal>
  );
};

export default NoteModal;
