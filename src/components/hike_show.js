import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ShowHike extends Component {
	render(){
		const { id } = this.props.match.params;
		const { hikes } = this.props;

		const hike = hikes[id];
		console.log(hike);
		// const { hike } = this.props;
		return(
			<div>
				<h1 className="text-xs-center">
					{hike.name}
				</h1>
				<p className="text-xs-center">{hike.description}</p>
				<Link to="/hikes" className="pull-right btn btn-primary">Back to Hikes</Link>
			</div>
		);
	}
}

// function mapStateToProps({ hikes }, ownProps){
// 	return { hike: hikes[ownProps.match.params.id]};
// }

function mapStateToProps(state){
	return { hikes: state.hikes};
}

export default connect(mapStateToProps)(ShowHike);