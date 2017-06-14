import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	return(
		<Link to={`/hikes/${hike.unique_id}`} className="list-group-item">
			<p className="text-xs-center card-text">{hike.name}</p>	
			<div className="background-image"></div>
		</Link>
	);	
};

export default HikeListItem;