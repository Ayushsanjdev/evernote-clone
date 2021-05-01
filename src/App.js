import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import './firebase_config/config';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';
import SidebarItemComponent from './siderbaritem/sidebaritem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className="app-container">
        <h1>Evermemo</h1>
        <SidebarComponent 
          selectedNoteIndex = {this.state.selectedNoteIndex} 
          notes = {this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}></SidebarComponent>
          {
            this.state.selectedNote ?
            <EditorComponent
              selectedNote={this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}></EditorComponent> :
              null
          }
        <SidebarItemComponent></SidebarItemComponent>
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes });
      });
  };
  selectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  }
}

export default App;
