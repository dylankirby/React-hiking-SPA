import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike, lon, lat } = data;
	const linkProps = {
		pathname: `/hikes/${hike.unique_id}`,
		state: {
			hike: hike,
			coords: {
				lon: lon,
				lat: lat
			}
		}
	}
	return(
		<Link to={linkProps} className="list-group-item">
			<h5 className="text-xs-center card-text">{hike.name} - {hike.city}, {hike.state}</h5>	
		</Link>
	);	
};

export default HikeListItem;