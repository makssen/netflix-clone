import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { Cart } from '../components/Cart';
import { CartPreview } from '../components/CartPreview';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../components/context/ContextProvider';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    cartGrid: {
        flexGrow: 1
    },
    iconColor: {
        color: '#fff'
    }
});

const Films = () => {

    const classes = useStyles();

    const { films } = useContext(Context);

    return (
        <Grid container justify="center" spacing={3}>
            <Grid item xs={12} >
                <CartPreview films={films} />
            </Grid>
            {films.results && films.results.map((item, i) => <Grid key={`${item.title}-${i}`} item><Fade left><Cart {...item} /></Fade></Grid>)}
        </Grid>
    );
}

export { Films };
