import axios from 'axios';

export const FETCH_HIKES = "FETCH_HIKES";

const ROOT_URL = "https://trailapi-trailapi.p.mashape.com/";
const ACTIVITY = "q[activities_activity_type_name_eq]=hiking";
const RADIUS   = 15;
const config = {
  headers: {"X-Mashape-Key": "CXx2b3SnC2mshNLJQcfzwWdwSjslp1v98Oujsn6ApEmiDeNjOr"}
};

// "?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=Australia&q[state_cont]=California&radius=25"

export function fetchHikes(lng, lat) {
	// const request = axios.get({`${ROOT_URL}?lat=${lat}&limit${LIMIT}&lon=${lon}&${ACTIVITY}`});
	const request = axios.get(`${ROOT_URL}?lat=${lat}&limit=25&lon=${lng}&${ACTIVITY}&radius=${RADIUS}`, config);
	
	return {
		type: FETCH_HIKES,
		payload: request
	}
}