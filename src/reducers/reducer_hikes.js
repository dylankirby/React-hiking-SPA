import { FETCH_HIKES } from '../actions/index';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_HIKES:
			return action.payload.data.places;
		default:
			return state;
	}
}