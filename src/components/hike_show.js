import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';



class ShowHike extends Component {
	render(){
		const { id } = this.props.match.params;
		const { hikes } = this.props;
		
		// isolate hike user wants to see without modification to state
		const hike = hikes[id];
		return(
			<div>
				<div className="title">
					<h1 className="text-xs-center">{hike.name}</h1>
					<h4 className="text-xs-center title">{hike.city}, {hike.state}</h4>
				</div>
				<div className="jumbotron container-fluid"></div>
				<div className="row">
					<div className="container">
						<div className="col-lg-8 col-md-12, col-sm-12 col-xs-12">
							<p className="">{hike.description}</p>
						</div>

						<div className="col-lg-4 col-md-6, col-sm-12 col-xs-12">
							<ul>
								<li>Time</li>
								<li>Distance</li>
								<li>Difficulty</li>
							</ul>
						</div>
					</div>
				</div>
				<p className=""><strong>Directions:</strong> {hike.directions}</p>
				<Link to="/hikes" className="pull-xs-right btn btn-primary">Back to Hikes</Link>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { hikes: state.hikes};
}

export default connect(mapStateToProps)(ShowHike);