import { FETCH_HIKES } from '../actions/hikes';
import _ from 'lodash';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_HIKES:
			return _.mapKeys(action.payload.data.places, 'unique_id');
		default:
			return state;
	}
}