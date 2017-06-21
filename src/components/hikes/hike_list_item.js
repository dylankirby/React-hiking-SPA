import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	return(
		<Link to={{ pathname: `/hikes/${hike.unique_id}`, hash: `${hike.name}`}} className="list-group-item">
			<h5 className="text-xs-center card-text">{hike.name}</h5>	
			<img src="../../assets/images/backpack-flat.jpg" alt="Hike Image Not Available" className="img-thumbnail"/>
		</Link>
	);	
};

export default HikeListItem;