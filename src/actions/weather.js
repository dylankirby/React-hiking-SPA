import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

const keys = require('../../keys');
const req_url = "http://api.openweathermap.org/data/2.5/weather?"

export function fetchWeather(lon, lat) {
	const request = axios.get(`${req_url}lat=${lat}&lon=${lon}&APPID=${keys.OPEN_WEATHER_MAP_KEY}`);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}