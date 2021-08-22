import { createStore, combineReducers, compose, applyMiddleware } from "redux";

//Reducers
import {CurrentWeatherReducer} from './reducers/reducers.js'

import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export const initialState ={
    currentWeather:{
        city:{},
        query:"",
        search: {}
    }
}

const mainReducer = combineReducers({
    currentWeatherByCity:CurrentWeatherReducer
})

export const configureStore = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
  