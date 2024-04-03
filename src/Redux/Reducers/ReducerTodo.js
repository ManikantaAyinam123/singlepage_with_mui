import React from 'react';

const initialState = {
    data: [],
};

const ReducerTodo = (state = initialState, action) => {
    console.log("reducer data todo",action.payload);
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

export default ReducerTodo;