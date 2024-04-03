export const setWeatherData = (data) => {
    console.log('This is from Action weather ',data)
    return{
        type: "SET_WeatherDATA",
        payload: data,
    };
};