import axios from 'axios'

const REQ_URL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="
const keys = require('../../keys');

const config = {
	headers: {'Ocp-Apim-Subscription-Key': keys.BING_KEY}
}

export const FETCH_IMAGE = "FETCH_IMAGE"

export function fetchImage(name) {
	const request = axios.get(`${REQ_URL}${name}&count=1`, config);

	return {
		type: FETCH_IMAGE,
		payload: request
	}
}