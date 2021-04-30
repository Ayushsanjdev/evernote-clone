import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../siderbaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        return (
        <div className = {classes.sidebarContainer}>
            <Button 
            onClick = {this.newNoteBtnClick}
            className = {classes.newNoteBtn}>{this.state.addingNote ? '❌ cancel note  ' : 'new note'}</Button>
            {
                this.state.addingNote ?
                <div>
                    <input type = 'text'
                    className = {classes.newNoteInput}
                    placeholder = 'Enter note title'
                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                    </input>
                    <Button 
                        className = {classes.newNoteSubmitBtn}
                        onClick = {this.submitNewNote}>
                        submit button
                    </Button>
                </div> :
                null
            }
            <List>
                {
                    notes.map((_note, _index) => {
                        return (
                            <div key = {_index}>
                                <SidebarItemComponent _note = {_note} 
                                    _index = {_index} 
                                    selectedNoteIndex={selectedNoteIndex}
                                    deleteNote = {this.deleteNote}
                                    selectNote = {this.selectNote}>
                                </SidebarItemComponent>
                            </div>
                        )
                    })
                }
            </List>
        </div>
        );
    }
    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote});
    }
    updateTitle = (txt) => {
        this.setState({title: txt});
    }
    submitNewNote = () => {
        console.log(this.state);
    }
    selectNote = () => {
        console.log('select note');
    }
    deleteNote = () => {
        console.log('delete note');
    }

}

export default withStyles(styles)(SidebarComponent);