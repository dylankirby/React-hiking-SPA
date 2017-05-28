import { combineReducers } from 'redux';
import HikesReducer from './reducer_hikes';

const rootReducer = combineReducers({
  hikes: HikesReducer
});	

export default rootReducer;
