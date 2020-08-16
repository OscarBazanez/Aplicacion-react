import React, { useState } from 'react';
import { Navbar } from '../molecules';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppRoutes from '../_routes';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {
    purple,
    grey,
    lightBlue,
  } from "@material-ui/core/colors";
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

const LayoutTemplate = () => {
    const classes = useStyles();
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? grey[900] : lightBlue[800];
    const mainSecondaryColor = darkState ? purple["A200"] : grey[50];
    let darkTheme = createMuiTheme({
    palette: {
        type: palletType,
        primary: {
        main: mainPrimaryColor
        },
        secondary: {
        main: mainSecondaryColor
        }
    }
    });
    darkTheme = responsiveFontSizes(darkTheme);
    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.root}>
                <Navbar darkState={darkState} setDarkState={setDarkState}></Navbar>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}></div>
                    <Switch>
                        {
                            AppRoutes.map((rout, idx) =>
                                <Route
                                    key={`${idx}_page`}
                                    path={rout.route}
                                    render={props => <rout.component {...props} />}
                                />
                            )
                        }
                    </Switch>
                    <Redirect from='/' to='/dashboard' />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default LayoutTemplate;