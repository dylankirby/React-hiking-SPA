import axios from 'axios';

export const FETCH_HIKES = "FETCH_HIKES";

const keys = require('../../keys');

const ROOT_URL = "https://trailapi-trailapi.p.mashape.com/";
const ACTIVITY = "q[activities_activity_type_name_eq]=hiking";
const RADIUS   = 25;
const config = {
  headers: {"X-Mashape-Key": keys.MASHAPE_KEY}
};

export function fetchHikes(lng, lat) {
	const request = axios.get(`${ROOT_URL}?lat=${lat}&limit=6&lon=${lng}&${ACTIVITY}&radius=${RADIUS}`, config);
	
	return {
		type: FETCH_HIKES,
		payload: request
	}
}