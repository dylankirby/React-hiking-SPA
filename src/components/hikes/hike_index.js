import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geolocated } from 'react-geolocated';
import { CSSTransitionGroup } from 'react-transition-group';
import _ from 'lodash';

// actions import
import { fetchHikes } from '../../actions/hikes';

// component import
import HikeListItem from './hike_list_item';

// define component
class HikeIndex extends Component {
	geoHikeSearch(){
		const {longitude, latitude} = this.props.coords;
		this.props.fetchHikes(longitude, latitude);
	};
	
	// renders instances of hikeListItem for all hikes returned
	renderHikeList(){
		const { hikes } = this.props;
		return _.map(hikes, (hike) => {
			return(
				<HikeListItem 
					hike={hike}
					key={hike.unique_id}
				/>
			)
		});
	}

	render(){
		// if no geolocation avail, display searchbar
		if(!this.props.isGeolocationAvailable && !this.props.isGeolocationEnabled){
  		return(
  			<div className="index align-middle">
  				<div>Geolocation not available</div>
					<div>Search Bar --- Hooked up to action for doing hike by city search</div>
  			</div>
  		);
  	}
  	// if coordinates returned from geo and hikes array is empty run search, loading spinner
  	else {
			if(Object.keys(this.props.hikes).length < 1 && this.props.coords){
				this.geoHikeSearch();
				return(
					<div className="loader index">
						<CSSTransitionGroup
		          transitionName="index"
				      transitionAppear={true}
				      transitionAppearTimeout={500}
				      transitionEnter={false}
				      transitionLeave={false}>
			          <p className="text-xs-center">Loading Hikes Near You</p>
								<div className="loading"></div>
		        </CSSTransitionGroup>
					</div>
				);
			} 
			// if hikes api call has returned, render list
			else if (Object.keys(this.props.hikes).length >= 1){
				return(
					<CSSTransitionGroup
			      transitionName="index"
			      transitionAppear={true}
			      transitionAppearTimeout={500}
			      transitionEnter={false}
			      transitionLeave={false}>
							<div className="container-fluid"> 
								<h1 className="text-xs-center">Hikes near you</h1>
								{this.renderHikeList()}
			  			</div>
			    </CSSTransitionGroup>
	  		);	
			} else {
				return(
					<div className="loader index">
						<CSSTransitionGroup
		          transitionName="index"
				      transitionAppear={true}
				      transitionAppearTimeout={500}
				      transitionEnter={false}
				      transitionLeave={false}>
			          <p className="text-xs-center">Loading Hikes Near You</p>
								<div className="loading"></div>
		        </CSSTransitionGroup>
					</div>
				);
			}
  	}
	}
}


function mapStateToProps(state){
	return { hikes: state.hikes };
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(
	connect(mapStateToProps, { fetchHikes })(HikeIndex)
);


