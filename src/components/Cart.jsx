import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import { Context } from './context/ContextProvider';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        backgroundColor: '#181818',
        color: '#fff'
    },
    media: {
        height: 180,
    },

    description: {
        color: '#a3a3a3',
        minHeight: 160
    },
    linkStyle: {
        textDecoration: 'none',
        color: '#fff'
    }
});

const Cart = ({ id, title, overview, poster_path }) => {

    const classes = useStyles();

    const { addToWatch } = useContext(Context);

    return (
        <Card className={classes.root}>
            <NavLink className={classes.linkStyle} to={`/film_preview#${id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.description} variant="body2" component="p">
                            {overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </NavLink>
            <CardActions>
                <Button onClick={() => addToWatch(title, overview, poster_path)} size="small" color="secondary">
                    Add to Watch
                </Button>
            </CardActions>
        </Card>
    );
}

export { Cart };
