import React from 'react';
import { Grid } from '@mui/material';

const Banner = () => {
  return (
    <Grid container>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeD4Y6cCpGndJEIifLbWnv7fd7NDyYmx5NQ4Bv0rS&s" 
        alt="banner" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' ,border:"1px solid grey"}}
      />
    </Grid>
  );
};

export default Banner;
