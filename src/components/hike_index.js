import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';

// actions import
import { fetchHikes } from '../actions/index';

// define component
class HikeIndex extends Component {
	geoHikeSearch(){
		if(this.props.coords){
			const {longitude, latitude} = this.props.coords;
			this.props.fetchHikes(longitude, latitude);
		}
	}

	renderHikeList(){
		const { hikes } = this.props;

		if(hikes.constructor === Array){
			return hikes.map((hike) => {
				return(
					<li key={hike.unique_id} className='list-group-item'>
						{hike.name}
						<p className="text-xs-right">{`${hike.city}, ${hike.state}`}</p>
					</li>
				)
			});
		} else {
			return(
				<div>
					No
				</div>
			)
		}
	}

  render() {
  	this.hikeSearch();
    return (
      <div>
      	<h3>Fetch Hikes</h3>
      	<div>
      		<h3>Your Location:</h3>
      	</div>
      	<ul className='list-group'>

      		{this.renderHikeList()}
      	</ul>
      </div>
    );
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


