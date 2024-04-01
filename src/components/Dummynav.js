import React from 'react';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';

const Dummynav = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ display: { xs: 'flex', md: 'none' }, mr: 5 }}>
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <LocalLibraryIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>Two In One</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <LocalLibraryIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ display: { xs: 'flex', md: 'none' } }}>Two In One</Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Todo App</Button>
                    <Button color="inherit">Weatherapp</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Dummynav;
