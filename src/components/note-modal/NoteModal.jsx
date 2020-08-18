import React from "react";
import { Modal } from "semantic-ui-react";

function NoteModal({ trigger }) {
  return (
    <Modal
      trigger={trigger}
      header="Reminder!"
      content="Call Benjamin regarding the reports."
      actions={["Snooze", { key: "done", content: "Done", positive: true }]}
    />
  );
}

export default NoteModal;
