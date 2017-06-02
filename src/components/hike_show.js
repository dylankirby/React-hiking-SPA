import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ShowHike extends Component {
	render(){
		const { id } = this.props.match.params;
		const { hikes } = this.props;
		
		// isolate hike user wants to see
		const hike = hikes[id];
		return(
			<div>
				<h1 className="text-xs-center">{hike.name}</h1>
				<h4 className="text-xs-center">{hike.city}, {hike.state}</h4>
				<p className="text-xs-center">{hike.description}</p>

				<Link to="/hikes" className="pull-center btn btn-primary">Back to Hikes</Link>
				<p className=""><strong>Directions:</strong> {hike.directions}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { hikes: state.hikes};
}

export default connect(mapStateToProps)(ShowHike);