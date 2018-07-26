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
						<div className="container">
							<div className="row hike-main">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<img src={imageUrl} alt="No Image" className="img-thumbnail img-responsive"/>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
									<h6><u><strong>About this hike</strong></u></h6>
									<p className="">
										{hike.description ? hike.description : 'No information available'}
									</p>
								</div>
								<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
									<h6><u><strong>Directions</strong></u></h6>
									<p className="">
										{hike.directions ? hike.directions : 'No information available'}
									</p>
								</div>
								<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
									<h6><u><strong>Current Weather: {weather.main ? `${Math.round(weather.main.temp - 273)} Degrees and ${weather.weather[0].main}` : 'No Info Available'}</strong></u></h6>
									<h6><u><strong>Distance From You:   {coords ? distance(coords.lon, coords.lat, hike.lon, hike.lat) +' km' : 'No Info Available'}</strong></u></h6>
								</div>
							</div>
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