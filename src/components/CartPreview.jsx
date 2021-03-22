import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Context } from './context/ContextProvider';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#181818',
        color: '#fff'
    },
    media: {
        height: 500,
    },

    description: {
        color: '#a3a3a3',
    },
    linkStyle: {
        textDecoration: 'none',
        color: '#fff'
    }
});

const CartPreview = ({ films }) => {

    const classes = useStyles();

    const { randomFilm, addToWatch } = useContext(Context);

    return (
        <Card className={classes.root}>
            <NavLink className={classes.linkStyle} to={`/film_preview#${randomFilm.id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500/${randomFilm.poster_path}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {randomFilm.title}
                        </Typography>
                        <Typography className={classes.description} variant="body2" component="p">
                            {randomFilm.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </NavLink>
            <CardActions>
                <Button onClick={() => addToWatch(randomFilm.title, randomFilm.overview, randomFilm.poster_path)} size="small" color="secondary">
                    Add to Watch
                </Button>
            </CardActions>
        </Card>
    );
}

export { CartPreview };