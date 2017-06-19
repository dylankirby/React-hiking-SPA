import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import _ from 'lodash';

class ShowHike extends Component {
	deg2rad(deg) {
  	return deg * (Math.PI/180)
	};

	getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	  const R = 6371; // Radius of the earth in km
	  const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
	  const dLon = this.deg2rad(lon2-lon1); 
	  const a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  const d = R * c; // Distance in km
	  return Math.round(d);
	};

	render(){
		const { hike, longitude, latitude} = this.props.location.state;
		return(
				<CSSTransitionGroup
	      transitionName="index"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionEnter={false}
	      transitionLeave={false}>
		      <div>
						<div className="title">
							<h1 className="text-xs-center">{hike.name}</h1>
							<h4 className="text-xs-center title">{hike.city}, {hike.state}</h4>
						</div>
						<div className="row hike-main container-fluid">
							<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
								<img src="../../assets/images/morning-hike.jpg" alt="No Image" className="img-thumbnail"/>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
									<ul>
										<li className="hike-info-item">Time:   {hike.time ? hike.time : 'No Info Available'}</li>
										<li className="hike-info-item">Distance:   {hike.dist ? hike.dist : 'No Info Available'}</li>
										<li className="hike-info-item">Difficulty:   {hike.diff ? hike.diff : 'No Info Available'}</li>
										<li className="hike-info-item">Start Elevation:   {hike.startel ? hike.startel : 'No Info Available'}</li>
										<li className="hike-info-item">End Elevation:   {hike.endel ? hike.endel : 'No Info Available'}</li>
										<li className="hike-info-item">Camping Available?:   {hike.camp ? hike.camp : 'No Info Available'}</li>
										<li className="hike-info-item">Region:   {hike.region ? hike.region : 'No Info Available'}</li>
										<li className="hike-info-item">Dog Friendly:   {hike.dogfriend ? hike.dogfriend : 'No Info Available'}</li>
										<li className="hike-info-item">Distance Away: {hike.lon && hike.lat ? `${this.getDistanceFromLatLonInKm(latitude, longitude, hike.lat, hike.lon)}km` : 'No Info Available'}</li>
									</ul>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<h6><u><strong>About this hike</strong></u></h6>
								<p className="">
									{hike.description ? hike.description : 'No information available'}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<h6><strong><u>How to get there</u></strong> </h6>
								<p>{hike.directions}</p>
							</div>
						</div>
						<div className="container-fluid back-btn-container">
							<Link to="/hikes" className="pull-xs-left btn btn-primary back-btn">Back to Hikes List</Link>
						</div>
					</div>
	    </CSSTransitionGroup>
		);
	}
}

export default ShowHike;