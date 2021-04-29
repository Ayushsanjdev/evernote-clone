import React from 'react';
import './App.css';
import firebase from 'firebase/app';

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
      <div>
        <h1>Evermemo</h1>
      </div>
    )
  }

  componentDidMount = () => {
    firebase
    .firestore()
    .collection('notes')
  }
}

export default App;
