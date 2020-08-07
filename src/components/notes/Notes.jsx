import React from "react";

import "./Notes.scss";

import Note from "../note/Note";

const Notes = ({ notes }) => (
  <div className="Notes">
    {notes.map((note) => (
      <Note key={note.id} note={note} />
    ))}
  </div>
);

export default Notes;
