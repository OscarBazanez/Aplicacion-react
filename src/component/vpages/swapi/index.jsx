
import React, {  useState } from 'react'
import HomePage from './components/listpeople'
import DetailsPeople from './components/detailspeople'
//import Dashboard from './dark/index'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
const DashboardSwapi = () =>{
    const [characterSelected, setCharacterSelected] = useState(null)
    return(
        <>
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
        </>
    )
}
export default DashboardSwapi;