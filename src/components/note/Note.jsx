import React from "react";
import { Card, Header } from "semantic-ui-react";
import Moment from "moment";

import "./Note.scss";

const Note = ({ note, ...props }) => {
  const { id, title, description, updatedAt } = note;

  return (
    <div className="Note" {...props}>
      <Card link key={id}>
        <Card.Content>
          <Header as="h4">
            {title.length > 70 ? `${title.substring(0, 70)}...` : title}
          </Header>
          <Card.Meta>
            Last updated: <i>{Moment(updatedAt).format("Do MMM h:mm A")}</i>
          </Card.Meta>
          <Card.Description>
            {description.length > 125
              ? `${description.substring(0, 125)}...`
              : description}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Note;
