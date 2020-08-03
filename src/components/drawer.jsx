import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Divider,List,ListItem, ListItemText} from '@material-ui/core'
const drawerWidth = 240
const style = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));


const DrawerNavbar = (props) => {
    const classes = style()
    return(
        <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant={props.variant}
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <List component='nav'>
                <ListItem>
                    <ListItemText>Ir a lista</ListItemText>
                </ListItem>
            </List>
        </Drawer>

    )
}
export default DrawerNavbar;
