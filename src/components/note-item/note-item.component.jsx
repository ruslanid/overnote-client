import React from 'react';

import {} from './note-item.styles';

const NoteItem = ({note: {title, body}}) => (
  <div className="note-item">
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default NoteItem;