import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	return(
		<Link to={`/hikes/${hike.unique_id}`} className="list-group-item">{hike.name}</Link>
	);	
};

export default HikeListItem;