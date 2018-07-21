import { combineReducers } from 'redux';
import HikesReducer from './reducer_hikes';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  hikes: HikesReducer,
  weather: WeatherReducer
});	

export default rootReducer;
