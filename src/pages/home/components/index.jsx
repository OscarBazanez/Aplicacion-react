import React, { useEffect, useState } from 'react';
import  { peoples }  from '../../../services';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,IconButton} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';//import MyProvider from './context   /homeContext';
import EndPoint from '../../../services/endpoint'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const endPointPeople= EndPoint.swapi.people
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    }
}));
const HomePage = ({ onSelectCharacter }) => {
    const classes = useStyles();
    //const classes = useStyles();
    const [characters, setCharacters] = useState(null);
    //const [PeopleId, setPeopleId] = useState(null);
    
    const fetchData = async (urlParam,endPoint) => {
        const serverData = await peoples.getAll(urlParam,endPoint);
        setCharacters(serverData);
    }

    useEffect(() => {
        fetchData('',endPointPeople);
    }, []);

    const requestMoreData = (serverUrl) => {
        const [baseUrlData, params] = serverUrl.split('?');
        fetchData(`?${params}`,`${endPointPeople}`);
    }
    const requestPeopleId = (urlPeopleId,endPoint) => {
        const [baseUrlData2, paramsdddd] = urlPeopleId.split('http://swapi.dev/api/people/');
        //console.log(paramsdddd)
        onSelectCharacter(paramsdddd)
    }
    const [value, setValue] = useState('female');
    const handleChange = (event) => {
        setValue(event.target.value)
      }
    return (
        characters &&
        <>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6">Datos curiosos de tu personaje favorito</Typography>
                <List component="nav" aria-label="secondary mailbox folders">
                    {
                        characters.results.map((people, idx) => (
                            <ListItem 
                                dense={true} 
                                button onClick={() => requestPeopleId(people.url,endPointPeople)} 
                                key={idx}
                            >{people.name}</ListItem>
                        ))
                    }
                </List>
                <div align="center">
                    {characters.previous && 
                        <IconButton 
                            aria-label="previous"
                            onClick={() => requestMoreData(characters.previous)}
                        ><ArrowBackIosIcon fontSize="small"/></IconButton>
                    }
                    {characters.next &&
                        <IconButton
                            aria-label="next"
                            onClick={() => requestMoreData(characters.next)}
                            style={{ marginLeft: '16px' }}
                        ><ArrowForwardIosIcon fontSize="small"/></IconButton>
                    }
                </div>
            </Paper>
        </>
    )
}

export default HomePage;