import React from 'react';

const initialState = {
    data2: [],
};

const ReducerWeather = (state = initialState, action) => {
    console.log("reducer data weather",action.payload);
    switch (action.type) {
        case 'SET_WeatherDATA':
            return {
                ...state,
                data2: action.payload,
            };

        default:
            return state;
    }


};

export default ReducerWeather;
