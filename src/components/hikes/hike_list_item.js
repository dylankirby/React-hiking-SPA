import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	return(
		<Link to={`/hikes/${hike.unique_id}`} className="list-group-item">
			<h5 className="text-xs-center card-text">{hike.name} - {hike.city}, {hike.state}</h5>	
		</Link>
	);	
};

export default HikeListItem;