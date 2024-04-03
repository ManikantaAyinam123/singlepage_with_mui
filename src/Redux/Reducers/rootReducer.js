import { combineReducers } from "redux";
import ReducerTodo from "./reducerTodo";
import ReducerWeather from "./reducerWeather";



const rootReducer = combineReducers({ ReducerTodo, ReducerWeather});


export default rootReducer;