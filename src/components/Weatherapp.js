import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { GetData } from "../Redux/apis/api";
import { connect } from "react-redux";
import { setWeatherData } from "../Redux/actions/actionWeather";

const Weatherapp = ({ data, setWeatherData }) => {
    const defaultWeatherIcon = './assets/images/clear.png';
    const weatherIcon = {
        'Clear': './assets/images/clear.png',
        'Clouds': './assets/images/cloud.png',
    };

    const [city, setCity] = useState("");


    const handleClick = async () => {
        try {
            if (!city) {
                alert("please enter city name")
                return;
            }
            const weatherDataFromApi = await GetData(city);
            setWeatherData(weatherDataFromApi);

        } catch (error) {

            console.log('error occurred:', error);

        }
    }

    return (
        <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
            <Box boxShadow={5} p={4} maxWidth={400} margin="auto" bgcolor="#f0f0f0" borderRadius={2}>
                <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <Typography variant="h4" color="primary">Weather App</Typography>
                    </Grid>
                    <Grid item display="flex" alignItems={"center"}>
                        <Grid xs={8} marginRight="10px">
                            <TextField
                                placeholder='Enter City Name'
                                value={city}
                                onChange={(e) => { setCity(e.target.value); }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant='contained' color="primary" onClick={handleClick} fullWidth>Search</Button>
                        </Grid>
                    </Grid>

                    {!data || (data && Object.keys(data).length === 0) ? (
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
                    ) : (
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
    return {
        data: state.ReducerWeather.data2,
    }
}

const mapDispatchToProps = {
    setWeatherData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Weatherapp);
