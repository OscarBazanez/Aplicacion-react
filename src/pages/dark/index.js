import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";


// For Switch Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";





export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
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
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };


  return (
    <ThemeProvider theme={darkTheme}>


          <Container maxWidth="lg">
            <Grid container spacing={3}>
            <Grid item xs={12}><Switch checked={darkState} onChange={handleThemeChange} />  
                <Paper><br></br><br></br><br></br><br></br>
dasdasd dasdas              </Paper>
              </Grid>
        
            </Grid>

            <Grid item xs={12}><Paper><br></br><br></br><br></br><br></br>
sdasdasd dasdas       s
s        </Paper>
            </Grid>

          </Container>
    </ThemeProvider>
  );
}