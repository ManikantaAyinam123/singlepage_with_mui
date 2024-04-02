import { combineReducers } from "redux";
import ReducerTodo from "./ReducerTodo";
import ReducerWeather from "./ReducerWeather";



const rootReducer = combineReducers({ ReducerTodo, ReducerWeather});


export default rootReducer;