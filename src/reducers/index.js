import { combineReducers } from 'redux';
import HikesReducer from './reducer_hikes';
import WeatherReducer from './reducer_weather';
import ImageReducer from './reducer_image';

const rootReducer = combineReducers({
  hikes: HikesReducer,
  weather: WeatherReducer,
  image: ImageReducer
});	

export default rootReducer;
