import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import GetData from "../Redux/Api";
import { connect } from "react-redux";
import { setData } from "../Redux/Action";

const Weatherapp = ({ data, setData }) => {
    const defaultWeatherIcon = './assets/images/clear.png';
    const weatherIcon = {
        'Clear': './assets/images/clear.png',
        'Clouds': './assets/images/cloud.png',
    };

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const search = async () => {
        if (!city.trim()) {
            setError('Please enter a city name.');
            return;
        }
        try {
            const data = await GetData(city);
            if (data.cod === '404') {
                setError('City not found. Please enter a valid city name.');
                setWeatherData(null);
            } else {
                setData(data);
                setWeatherData(data);
                setError("");
            }
        } catch (error) {
            setError('Please Enter Valid City Name');
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }
    };

    return (
        <Box sx={{ backgroundColor: '#333', p:4 }}>
            <Box  boxShadow={5}  p={4} maxWidth={400} margin="auto" bgcolor="#f0f0f0" borderRadius={2}>
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
                            <Button variant='contained' color="primary" onClick={search} fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                    {error && (
                        <Grid item>
                            <Typography variant="body1" color="error">{error}</Typography>
                        </Grid>
                    )}
                    {!weatherData && (
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
                    {weatherData && (
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <img src={weatherIcon[weatherData.weather[0].main] || defaultWeatherIcon} alt="weather-icon" style={{ width: 150, height: 150 }} />
                            </Grid>
                            <Grid item>
                                <Typography variant='h5'>{weatherData.name}</Typography>
                                <Typography variant='h6'>{Math.floor(weatherData.main.temp - 273) + "°C"}</Typography>
                                <Typography>Wind Speed: {weatherData.wind.speed} Km/h</Typography>
                                <Typography>Humidity: {weatherData.main.humidity}%</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = {
    setData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Weatherapp);
