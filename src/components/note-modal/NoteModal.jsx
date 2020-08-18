import React from "react";
import { Button, Modal } from "semantic-ui-react";

const NoteModal = ({ setShowModal, note }) => {
  const { title, description } = note;

  const [open, setOpen] = React.useState(true);

  const handleClose = async () => {
    await setOpen(false);
    setShowModal(false);
  };

  return (
    <Modal
      open={open}
      size="small"
      onClose={handleClose}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content scrolling>{description}</Modal.Content>
      <Modal.Actions>
        <Button positive onClick={handleClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NoteModal;