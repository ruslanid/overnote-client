import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import Moment from "moment";

import "./Note.scss";
import NoteModal from "../note-modal/NoteModal";

const Note = ({ note }) => {
  const { id, title, description, updatedAt } = note;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Note" onClick={() => setShowModal(true)}>
      <Card link key={id}>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            Last updated: <i>{Moment(updatedAt).format("Do MMM h:mm A")}</i>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
      {
        showModal && <NoteModal setShowModal={setShowModal} note={note} />
      }
    </div>
  );
};

export default Note;
