import React from 'react';

export default React.createContext({
  notes: [],
  addNote : (note) => {},
  deleteNote : (noteId) => {},
  editNote : (note) => {},
});
