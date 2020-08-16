import React, { useState } from 'react';
import { movies } from '../../../services';
import MovieItem from '../../organism/movie';
import styled from 'styled-components';
import { Grid,Paper,Hidden,InputAdornment,TextField } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie'
import {RedButton} from '../../atoms'
const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const findMovie = async () => {
        try {
            const response = await movies.search(query);
            console.log(response)
            setResults(response.results);
        } catch (error) {
            console.log({ error });
        }
    }
    return (
        <>
            <TextField
                id="movie_text"
                label="Nombre de la pelicula"
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
            <RedButton onClick={() => findMovie()}>Buscar</RedButton>
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