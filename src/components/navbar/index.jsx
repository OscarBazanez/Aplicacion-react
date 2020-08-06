import React,{useState} from 'react';
import {AppBar,Toolbar,IconButton,Typography,Button,Hidden} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import DrawerNavbar from '../drawer'
//import Parametros from './parametros'
//import Api from './fun_Promesa'
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        flexGrow: 1,
    },
    AppBar:{
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            position: 'fixed'
          },
    }

  }));
const Navbar = () =>{
    const classes = useStyles();
    const [abrir,setAbrir] = useState(false)
    const accionAbrir = () =>{
        setAbrir(!abrir)
    }
    return(
        <>
        <div className={classes.root}>
            <AppBar className={classes.AppBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { accionAbrir() }}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Hidden xsDown>
                <DrawerNavbar 
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerNavbar 
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
        </div>
        </>
    )
}

export default Navbar