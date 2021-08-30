import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{
  state = {
    notes: [],
  }
 
  addNote = (note) => {
    const notes = [...this.state.notes, note];
    this.setState({ notes: notes });
  };
 
  deleteNote = (noteId) => {
    const notes = this.state.notes.filter((note) => note.id !== noteId)
    this.setState({ notes: notes });
  };

  editNote = (editNote) => {
    const notes = this.state.notes.map((note) => {
      if(editNote.id === note.id) {
        return editNote;
      } else {
        return note;
      }
    })
    this.setState({ notes: notes });
  }

  render(){
    return (
      <Context.Provider 
      value={{
        notes: this.state.notes,
        addNote: this.addNote,
        deleteNote: this.deleteNote,
        editNote: this.editNote,
      }}
      >
        { this.props.children }
      </Context.Provider>
    );
  }
}