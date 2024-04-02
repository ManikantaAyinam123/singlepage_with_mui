import React, { useState,useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { GetData } from "../Redux/Apis/Api";
import { connect } from "react-redux";
import { setData } from "../Redux/Actions/ActionWeather";


const Weatherapp = ({ data, setData }) => {
    const defaultWeatherIcon = './assets/images/clear.png';
    const weatherIcon = {
        'Clear': './assets/images/clear.png',
        'Clouds': './assets/images/cloud.png',
    };

    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const handleClick = async () => {
        try {
            const weatherDataFromApi = await GetData(city);

            console.log('this is function variable data---->', weatherDataFromApi)
            setData(weatherDataFromApi);


        } catch (error) {
            console.log('error occured ---->', error);
        }
    }
   
    return (
        <Box sx={{ backgroundColor: '#333', p: 4 }}>
            <Box boxShadow={5} p={4} maxWidth={400} margin="auto" bgcolor="#f0f0f0" borderRadius={2}>
                <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <Typography variant="h4" color="primary">Weather App</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems={"center"} >
                        <Grid xs={8} marginRight="10px">
                            <TextField
                                placeholder='Enter City Name'
                                value={city}
                                onChange={(e) => { setCity(e.target.value); setError("") }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant='contained' color="primary" onClick={handleClick} fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                    {error && (
                        <Grid item>
                            <Typography variant="body1" color="error">{error}</Typography>
                        </Grid>
                    )}
                    {data === null || data === undefined && (
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <img src={defaultWeatherIcon} alt="weather-icon" style={{ width: 150, height: 150 }} />
                            </Grid>
                            <Grid item>
                                <Typography variant='h5'>Default City</Typography>
                                <Typography variant='h6'>--°C</Typography>
                                <Typography>Wind Speed: -- Km/h</Typography>
                                <Typography>Humidity: --%</Typography>
                            </Grid>
                        </Grid>
                    )}


                    {console.log("gvdgv", data)}
                    {data && data.weather && data.weather[0] && (
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <img src={weatherIcon[data.weather[0].main] || defaultWeatherIcon} alt="weather-icon" style={{ width: 150, height: 150 }} />
                            </Grid>
                            <Grid item>
                                <Typography variant='h5'>{data.name}</Typography>
                                <Typography variant='h6'>{Math.floor(data.main.temp - 273) + "°C"}</Typography>
                                <Typography>Wind Speed: {data.wind.speed} Km/h</Typography>
                                <Typography>Humidity: {data.main.humidity}%</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

const mapStateToProps = state => {
    console.log("this is from mapStateTo props", state.data)
    return {
        data: state.data,

    }
}

const mapDispatchToProps = {

    setData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Weatherapp);
