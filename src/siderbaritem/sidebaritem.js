import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItems from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helper_debouncer';

class SidebarItemComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(<div>hello from the SidebarComponent</div>);
    }
}

export default withStyles(styles)(SidebarItemComponent);