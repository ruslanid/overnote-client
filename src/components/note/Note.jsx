import React from "react";
import { Card } from "semantic-ui-react";
import Moment from "moment";

import "./Note.scss";

const Note = ({ note }) => {
  const { id, title, description, updatedAt } = note;

  return (
    <div className="Note">
      <Card link key={id}>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            Last updated: <i>{Moment(updatedAt).format("Do MMM h:mm A")}</i>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Note;
