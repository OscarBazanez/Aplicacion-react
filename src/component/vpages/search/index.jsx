import React, { useState } from 'react';
import { movies,tvshow } from '../../../services';
import MovieItem from '../../organism/movie';
import styled from 'styled-components';
import { Grid,
    Paper,
    Hidden,
    InputAdornment,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie'
import {RedButton} from '../../atoms'

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
const SearchPage = () => {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [type, setType] = useState('Peliculas');
    const [results, setResults] = useState([]);

    const findMovie = async () => {
        try {
            switch (type) {
                case 'Peliculas':
                    const response = await movies.search(query);
                    setResults(response.results);
                  break;
                case 'TVshows':
                  const response2 = await tvshow.search(query);
                    console.log(response2.results)
                    //setResults(response.results);
                  break;
                default:
                  console.log('Lo lamentamos, por el momento no disponemos de una respuesta');
              }

        } catch (error) {
            console.log({ error });
        }
    }
    return (
        <>
            <FormControl className={classes.formControl}>
                <TextField
                    id="movie_text"
                    label="Nombre"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <MovieIcon />
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="select_tipo">Tipo</InputLabel>
                <Select
                labelId="select_tipo"
                value={type}
                onChange={e => setType(e.target.value)}
                >
                    <MenuItem value={'Peliculas'}>Peliculas</MenuItem>
                    <MenuItem value={'TVshows'}>Series</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.selectEmpty}>
                <RedButton onClick={() => findMovie()}>Buscar</RedButton>
            </FormControl>

            <Grid container spacing={0}>
                <Grid item xs={10}>
                    <MovieContainer>
                    {
                        results.map((item, idx) =>
                            <MovieItem key={`movie_item_${idx}`} movie={item} />)
                    }
                    </MovieContainer>
                </Grid>

            </Grid>
        </>
    );
}
export default SearchPage;


/*
                <Hidden smDown>
                    <Grid item xs={2}>
                    <Paper elevation={3}>
                        aaaaaaaaaaaaaaaaaaa
                    </Paper>
                    </Grid>
                </Hidden>
*/