import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Context } from '../components/context/ContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#181818',
        color: '#fff'
    },
    media: {
        height: 250,
    },
    description: {
        color: '#a3a3a3'
    }
});

const Watch = () => {
    const classes = useStyles();

    const { watchFilms, deleteToWatch } = useContext(Context);

    const [deleteAnimation, setDeleteAnimation] = useState(false);

    return (
        <Grid container spacing={3}>
            {watchFilms.length > 0 ? (watchFilms.map(item =>
                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() => deleteToWatch(item.title)} size="small" color="secondary">
                                Delete
                                    </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
                :
                (
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        You have no movies available to watch. Go to {<Link style={{ color: '#fff' }} to="/" children="Films" />}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            }
        </Grid >
    );
}

export { Watch };
