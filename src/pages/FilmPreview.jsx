import React, { useContext } from 'react'
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { FilmRating } from '../components/FilmRating';
import { Context } from '../components/context/ContextProvider';

const useStyles = makeStyles(() => ({
    filmPost: {
        backgroundColor: '#181818',
        color: '#fff',
        display: 'flex'
    },
    release: {
        marginTop: 24
    },
    text: {
        color: '#a3a3a3'
    },
    img: {
        height: '100%'
    }
}));


const FilmPreview = () => {

    const classes = useStyles();

    const { addToWatch } = useContext(Context);

    const [film, setFilm] = useState([]);

    useEffect(() => {
        let hash = +window.location.hash.substring(1);
        fetch(`https://api.themoviedb.org/3/movie/${hash}?api_key=108a3dcad1f9a8ddef8c60eac64385d7`)
            .then(resp => resp.json())
            .then(resp => {
                setFilm(resp);
            })
    }, []);

    return (
        <div className={classes.root}>
            <Paper className={classes.filmPost} elevation={3}>
                <div className="Post">
                    <img className={classes.img} src={film.poster_path ? `https://image.tmdb.org/t/p/w500/${film.poster_path}` : ''} alt="film" />
                </div>
                <Box p={3}>
                    <div className="Description">
                        <Typography gutterBottom variant="h5" component="h2">
                            {film.title}
                        </Typography>
                        <Typography className={classes.text} variant="body2" component="p">
                            {film.overview}
                        </Typography>
                        <Typography className={classes.release} variant="body2" component="p">
                            Release date: {film.release_date}
                        </Typography>
                        <Typography className={classes.release} variant="body2" component="p">
                            <FilmRating rating={film.vote_average} />
                        </Typography>
                        <Button onClick={() => addToWatch(film.title, film.overview, film.poster_path)} size="small" color="secondary">
                            Add to Watch
                        </Button>
                    </div>
                </Box>
            </Paper>
        </div>
    );
}

export { FilmPreview };
