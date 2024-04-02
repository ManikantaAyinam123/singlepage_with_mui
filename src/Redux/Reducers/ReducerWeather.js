import React from 'react';

const initialState = {
    data: [],
};

const ReducerWeather = (state = initialState, action) => {
   
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }


};

export default ReducerWeather;
