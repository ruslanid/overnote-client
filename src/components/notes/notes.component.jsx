import React from 'react';

import './notes.styles.scss';

import NoteItem from '../note-item/note-item.component';

const Notes = ({notes}) => (
  <div className="notes">
    {notes.map(note => (
      <NoteItem key={note.id} note={note} />
    ))}
  </div>
);

export default Notes;