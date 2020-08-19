import React from "react";
import { Form } from "semantic-ui-react";

const NoteForm = ({ note: { title, description } }) => (
  <Form>
    <Form.Input
      // error={{ content: "Please enter a title", pointing: "below" }}
      fluid
      label="Title"
      placeholder="Title..."
      value={title}
      id="form-input-title"
    />
    <Form.TextArea
      // error="Please enter your last name"
      fluid
      label="Description"
      placeholder="Description..."
      value={description}
      id="form-input-description"
    />
  </Form>
);

export default NoteForm;
