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

	componentDidMount(){
		const { hike, coords } = this.props.location.state;
		this.props.fetchImage(hike.name);
		this.props.fetchWeather(coords.lon, coords.lat);
	}

	render(){
		let imageUrl = "";
		const { hike, coords } = this.props.location.state;
		const { weather } = this.props;

		if(!_.isEmpty(this.props.image)){
    	imageUrl = this.props.image.value[0].contentUrl
		}

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
								<img src={imageUrl} alt="No Image" className="img-thumbnail img-responsive"/>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<ul>
										<li className="hike-info-item">Current Temperature:   {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Daily High:   {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Daily Low: {weather.main ? `${Math.round(weather.main.temp - 273)}C` : 'No Info Available'}</li>
										<li className="hike-info-item">Current Weather: {weather.main ? weather.weather[0].main : 'No Info Available'}</li>
										<li className="hike-info-item">Distance From You:   {coords ? distance(coords.lon, coords.lat, hike.lon, hike.lat) +' km' : 'No Info Available'}</li>
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
	return { weather: state.weather, image: state.image};
}

export default connect(mapStateToProps, { fetchWeather, fetchImage })(ShowHike);