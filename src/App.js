import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import './firebase_config/config';

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
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(
        _doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        this.setState({notes});
        console.log(notes);
      });
  }
}

export default App;
