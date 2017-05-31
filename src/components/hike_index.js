import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';

// actions import
import { fetchHikes } from '../actions/index';

// component import
import HikeListItem from './hike_list_item';

// define component
class HikeIndex extends Component {
	geoHikeSearch(){
		const {longitude, latitude} = this.props.coords;
		this.props.fetchHikes(longitude, latitude);
	};

	renderHikeList(){
		const { hikes } = this.props;
		return hikes.map((hike) => {
			return(
				<HikeListItem 
					hike={hike}
					key={hike.unique_id}
				/>
			)
		});
	}

	render(){
		if(!this.props.isGeolocationAvailable && !this.props.isGeolocationEnabled){
  		return(
  			<div>
  				<div>Geolocation not available</div>
					<div>Search Bar --- Hooked up to action for doing hike by city search</div>
  			</div>
  		);
  	} else {
			if(this.props.hikes.constructor !== Array && this.props.coords){
				this.geoHikeSearch();
				return(
					<div>
						Loading your hikes
					</div>
				);
			} else if (this.props.hikes.constructor === Array){
				return(
					<div className="container"> 
						<div className="row">
							{this.renderHikeList()}
						</div>
	  			</div>
	  		);	
			} else {
				return(
					<div>
						Loading your hikes
					</div>
				);
			}
  	}
	}
}


function mapStateToProps(state){
	return { hikes: state.hikes};
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(
	connect(mapStateToProps, { fetchHikes })(HikeIndex)
);


