import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from "@iconify/react";

const Footer = () => {
    return (

        // <Grid container spacing={3} sx={{ bgcolor: '#f0f0f0' }}>
        //     <Grid item xs={12} sm={6} md={4} lg={3} >
        //         <Typography variant='h4' sx={{ color: '#333' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}></Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //     </Grid>
        //     <Grid item xs={12} sm={6} md={4} lg={3} >
        //         <Typography variant='h2' sx={{ color: '#333' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //     </Grid>
        //     <Grid item xs={12} sm={6} md={4} lg={3} >
        //         <Typography variant='h2' sx={{ color: '#333' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //     </Grid>
        //     <Grid item xs={12} sm={6} md={4} lg={3} >
        //         <Typography variant='h2' sx={{ color: '#333' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //         <Typography variant='h5' sx={{ color: '#555' }}>Home</Typography>
        //     </Grid>
        //     {/* Other grid items with Typography components */}
        // </Grid>



        <Grid container alignItems="center" spacing={2} sx={{ backgroundColor: '#000', p:2,marginTop:"10px" }}>
            <Grid item container display="flex" justifyContent="center" spacing={2}>
                <Grid item>
                    <Icon style={{ fontSize: 25 }} icon="skill-icons:instagram" />
                </Grid>
                <Grid item>
                    <Icon style={{ fontSize: 25 }} icon="logos:whatsapp-icon" />
                </Grid>
                <Grid item>
                    <Icon style={{ fontSize: 25 }} icon="skill-icons:twitter" />
                </Grid>
                <Grid item>
                    <Icon style={{ fontSize: 25 }} icon="logos:facebook" />
                </Grid>
            </Grid>
            <Grid item container display="flex" justifyContent="center" spacing={2}>
                <Grid item>
                    <Typography variant='h5' sx={{ color: '#ccc' }}>Home</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h5' sx={{ color: '#ccc' }}>About Us</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h5' sx={{ color: '#ccc' }}>Todoapp</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{ color: '#ccc' }}>Weatherapp</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{ color: '#ccc' }}>privacy Policy</Typography>
                </Grid>
            </Grid>
            <Grid item container display="flex" justifyContent="center" spacing={2}>
               
                <Grid item>
                    <Typography variant='body1' sx={{ color: '#ccc' }}>@copyright 2022 Manikanta</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}



export default Footer
