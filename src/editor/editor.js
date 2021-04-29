import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper_debouncer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import  styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }
    render() {
        
        return (
            <div>

            </div>
        );
    }
}

export default withStyles(styles)(EditorComponent);
