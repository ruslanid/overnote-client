import React from "react";
import { Modal } from "semantic-ui-react";

function NoteModal({ trigger, note: { title, description } }) {
  return <Modal trigger={trigger} header={title} content={description} />;
}

export default NoteModal;
