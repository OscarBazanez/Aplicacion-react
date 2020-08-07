import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar'
import HomePage from '../pages/home/components/index'
import LayoutSwapi from '../pages/layoutswapi'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        flexGrow: 1,
    }
}));
const Layout = () =>{
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                <Navbar />
                <div className={classes.content}>
                    <div className={classes.toolbar}></div>
                    <LayoutSwapi />
                </div>
            </div>
        </>
    )
}

export default Layout