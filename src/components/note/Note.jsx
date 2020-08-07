import React from "react";

import "./Note.scss";

const Note = ({ note: { title, body } }) => (
  <div className="Note">
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default Note;
