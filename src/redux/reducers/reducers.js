import {initialState} from '../store';
import {FETCH_CURRENT_WEATHER} from '../actions/actions.js';

export const CurrentWeatherReducer = (state = initialState.currentWeather, action) =>{
    switch(action.type){
        case FETCH_CURRENT_WEATHER:
            return{
                ...state,
                city:{ ...state,...action.payload}
            }
            default:return state;
    }
}