import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar'
//import HomePage from '../pages/home/components/index'
import LayoutSwapi from '../pages/layoutswapi'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        padding: theme.spacing(3)
    },
    appBarSpacer: theme.mixins.toolbar
}));
const Layout = () =>{
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                <Navbar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}></div>
                    <LayoutSwapi />
                </main>
            </div>
        </>
    )
}

export default Layout