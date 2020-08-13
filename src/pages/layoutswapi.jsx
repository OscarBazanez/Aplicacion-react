
import React, {  useState } from 'react';
import HomePage from './home/components/index'
import DetailsPeople from './home/components/detailspeople'
//import Dashboard from './dark/index'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const LayoutSwapi = () =>{
    const [characterSelected, setCharacterSelected] = useState(null)
    return(
        <>
        <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">Star Wars</Typography>
                    <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <HomePage onSelectCharacter={setCharacterSelected} />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <DetailsPeople  characterId={characterSelected} />
                </Grid>
            </Grid>
        </ThemeProvider>

        
            
            
        </>
    )
}
export default LayoutSwapi


