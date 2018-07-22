import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';
import { CSSTransitionGroup } from 'react-transition-group';
import { distance } from '../../../middleware/geo_distance';
import _ from 'lodash';

import { fetchWeather } from '../../actions/weather';
import { fetchImage } from '../../actions/image';

class ShowHike extends Component {

	render(){
		const { id } = this.props.match.params;
		const { hikes, coords, weather } = this.props; 
		// isolate hike user wants to see without modification to state
		const hike = hikes[id];
		let image_url = ""
		
		if(_.isEmpty(this.props.image)){
			this.props.fetchImage(hike.name);			
		} else {
			console.log(this.props.image);
    	image_url = this.props.image.queryExpansions[0].thumbnail.thumbnailUrl;
		}

		if(_.isEmpty(this.props.weather) && this.props.coords) {
			this.props.fetchWeather(coords.longitude, coords.latitude);
		}
		
		console.log(this.props.weather);
		
		return(
				<CSSTransitionGroup
	      transitionName="index"
	      transitionAppear={true}
	      transitionAppearTimeout={1000}
	      transitionEnter={false}
	      transitionLeave={false}>
		      <div>
						<div className="title">
							<h1 className="text-xs-center">{hike.name}</h1>
							<h4 className="text-xs-center title">{hike.city}, {hike.state}</h4>
						</div>
						<div className="row hike-main container">
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
								<img src={image_url} alt="No Image" className="img-thumbnail img-responsive"/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<ul>
										<li className="hike-info-item">Current Temperature:   {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Daily High:   {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Daily Low: {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Current Weather: {weather.main ? weather.weather[0].main : 'No Info Available'}</li>
										<li className="hike-info-item">Distance From You:   {coords ? distance(coords.longitude, coords.latitude, hike.lon, hike.lat) +' km' : 'No Info Available'}</li>
									</ul>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
									<h6><u><strong>About this hike</strong></u></h6>
									<p className="">
										{hike.description ? hike.description : 'No information available'}
									</p>
								</div>
							</div>
						</div>
						<br/>
						<div className="container">
							<h6><strong><u>How to get there</u></strong> </h6>
							<p>{hike.directions}</p>
						</div>
					</div>
	    </CSSTransitionGroup>
		);
	}
}

function mapStateToProps(state){
	return { hikes: state.hikes, weather: state.weather, image: state.image};
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(
	connect(mapStateToProps, { fetchWeather, fetchImage })(ShowHike)
);