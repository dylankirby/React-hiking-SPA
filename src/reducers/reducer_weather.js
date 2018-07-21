import { FETCH_WEATHER } from '../actions/weather'

export default function(state={}, action){
	switch(action.type){
		case FETCH_WEATHER:
			console.log(action.payload);
			return action.payload.data
		default:
			return state
	}
}