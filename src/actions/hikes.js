import axios from 'axios';

export const FETCH_HIKES = "FETCH_HIKES";
export const FETCH_IMAGE = "FETCH_IMAGE";

const ROOT_URL = "https://trailapi-trailapi.p.mashape.com/";
const ACTIVITY = "q[activities_activity_type_name_eq]=hiking";
const RADIUS   = 25;
const config = {
  headers: {"X-Mashape-Key": "CXx2b3SnC2mshNLJQcfzwWdwSjslp1v98Oujsn6ApEmiDeNjOr"}
};

export function fetchHikes(lng, lat) {
	const request = axios.get(`${ROOT_URL}?lat=${lat}&limit=20&lon=${lng}&${ACTIVITY}&radius=${RADIUS}`, config);
	
	return {
		type: FETCH_HIKES,
		payload: request
	}
}

export function fetchImage(){
	const requre = axios.get();

	return {
		type: FETCH_IMAGE,
		payload: request
	}
}