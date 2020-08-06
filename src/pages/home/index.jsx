import React, { useEffect, useState } from 'react';
import  peoples  from '../../services/peoples';
import { makeStyles } from '@material-ui/core/styles';
import AboutPeople from './a'
//import MyProvider from './context   /homeContext';
//import CompoChildOne from './components/compo_1';
//import {List,ListItem,ListItemIcon,Checkbox,ListItemText,ListItemSecondaryAction,IconButton} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
const HomePage = () => {
    //const classes = useStyles();
    const [characters, setCharacters] = useState(null);
    const [PeopleId, setPeopleId] = useState(null);
    
    const fetchData = async (urlParam) => {
        const serverData = await peoples.getAll(urlParam);
        setCharacters(serverData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const requestMoreData = (serverUrl) => {
        const [baseUrlData, params] = serverUrl.split('?');
        fetchData(`?${params}`);
    }
    const requestPeopleId = (urlPeopleId) => {
        const [baseUrlData2, paramsdddd] = urlPeopleId.split('http://swapi.dev/api/people/');
        //console.log(paramsdddd)
        setPeopleId(paramsdddd)
    }

    return (
        characters &&
        <>
            <span>Lista de personas {characters.count}</span>
            <ul>
                {
                    characters.results.map((people, idx) => (
                        <li onClick={() => requestPeopleId(people.url)} key={idx}>{people.name}</li>
                    ))
                }
            </ul>
            <div>
                {characters.previous && <button onClick={() => requestMoreData(characters.previous)}>Previous</button>}
                {characters.next && <button onClick={() => requestMoreData(characters.next)} style={{ marginLeft: '16px' }}>Next</button>}
            </div>
            <h1>{PeopleId}</h1>
                <AboutPeople peopleID={PeopleId}/>
        </>
    )
}

export default HomePage;