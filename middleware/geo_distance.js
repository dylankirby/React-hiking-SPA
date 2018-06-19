export function distance (lon1, lat1, lon2, lat2) {
	const earthRad = 6371;

	function toRad (degrees) {
		return degrees * Math.PI / 180
	}

	let dlat = toRad(lat2-lat1);
	let dlon = toRad(lon2-lon1);
	lat1 = toRad(lat1);
	lat2 = toRad(lat2);
		
	let a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.sin(dlon/2)* Math.sin(dlon/2) * Math.cos(lat1) * Math.cos(lat2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	return Math.round(c * earthRad);
}
