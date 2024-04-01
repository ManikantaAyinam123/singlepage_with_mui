import React from 'react';
import { Grid } from '@mui/material';

const Banner = () => {
  return (
    <Grid container>
      <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/002/885/318/small/nature-green-tree-fresh-leaf-on-beautiful-blurred-soft-bokeh-sunlight-background-with-free-copy-space-spring-summer-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg" 
        alt="banner" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Grid>
  );
};

export default Banner;
