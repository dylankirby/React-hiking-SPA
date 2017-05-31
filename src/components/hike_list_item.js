import React from 'react';
import { Link } from 'react-router-dom';

const HikeListItem = (data) => {
	const { hike } = data;
	console.log(data);
	return(
		<div className="col-sm-6 col-md-4">
			<div className="thumbnail text-center">
				<img src="..." alt="..." />
	    	<div className="caption text-center">
	      	<h6>{hike.name}</h6>
	      	<p>{hike.city}</p>
	      	<p><Link to="/hikes/:id" className="btn btn-primary">Explore</Link></p>
		    </div>
		  </div>
		</div>
	);
};

export default HikeListItem;