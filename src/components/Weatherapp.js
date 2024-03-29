
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const Weatherapp = () => {
    return (
        <Grid container justifyContent="center" marginTop="10px" spacing={2}>
            <Grid item sx={{ width: 500, height: 400, border: "1px solid black" }}>
                <TextField placeholder='Enter City Name' />
                <Button sx={{ marginLeft: '20px', marginTop: '10px' }} variant='contained'> Search</Button>
            </Grid>
        </Grid>
    );
};

export default Weatherapp;




