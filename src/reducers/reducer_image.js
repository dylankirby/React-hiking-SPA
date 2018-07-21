import { FETCH_IMAGE } from '../actions/image'

export default function(state={}, action){
	switch(action.type){
		case FETCH_IMAGE:
			return action.payload.data
		default:
			return state
	}
}