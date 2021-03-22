import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputBase-root': {
            color: '#fff',
            width: 300
        },
        '& .MuiFormLabel-root': {
            color: '#a3a3a3'
        }
    },
    filmPost: {
        backgroundColor: '#181818',
        color: '#fff',
    },
    searchList: {
        display: 'block'
    },
    searchLink: {
        textDecoration: 'none',
        color: '#000'
    },
    searchItem: {
        padding: 10,
        borderBottom: '1px solid #a3a3a3'
    }
}));

const Search = () => {

    const classes = useStyles();

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const searchFilm = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=108a3dcad1f9a8ddef8c60eac64385d7&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(resp => resp.json())
            .then(resp => !resp.errors ? setResult(resp.results) : setResult([]))
    }

    console.log(result.poster_path);

    return (
        <Paper className={classes.filmPost} elevation={3}>
            <Box p={3}>
                <Typography gutterBottom variant="h5" component="h2">
                    Search
                </Typography>
                <TextField
                    onChange={searchFilm}
                    className={classes.root}
                    id="outlined-textarea"
                    label="Search film"
                    placeholder="Enter film"
                    multiline
                    variant="outlined"
                    color="secondary"
                    value={query}
                />
                <Card style={{ width: 300 }}>
                    <ul className={classes.searchList}>
                        {result.map(item => <NavLink className={classes.searchLink} to={`/film_preview#${item.id}`}> <li className={classes.searchItem}>{item.title}</li></NavLink>)}
                    </ul>
                </Card>
            </Box>
        </Paper >
    );
}

export { Search };
