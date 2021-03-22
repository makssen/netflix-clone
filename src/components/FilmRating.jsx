import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const FilmRating = ({ rating }) => {

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <Rating name="customized-10" defaultValue={2} max={10} value={Math.floor(rating)} readOnly />
            </Box>
        </div>
    );
}

export { FilmRating };
