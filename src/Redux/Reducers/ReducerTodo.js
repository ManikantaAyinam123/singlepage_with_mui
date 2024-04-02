import React from 'react';

const initialState = {
    data2: [],
};

const ReducerTodo = (state = initialState, action) => {
    console.log("reducer data",action.payload);
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data2: action.payload,
            };
            case 'SELECT_ID' :
                return {
                    ...state,
                    selectTodoId : action.payload,
                }     
            
        default:
            return state;
    }


};

export default ReducerTodo;