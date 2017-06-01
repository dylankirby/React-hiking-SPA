import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	return(
		<div className="col-sm-6 col-md-4">
			<div className="thumbnail text-center">
	    	<div className="caption text-center">
	      	<h6>{hike.name}</h6>
	      	<p>{hike.city}</p>
	      	<p><Link to={`/hikes/${hike.unique_id}`} className="btn btn-primary">Explore</Link></p>
		    </div>
		  </div>
		</div>
	);
};

export default HikeListItem;