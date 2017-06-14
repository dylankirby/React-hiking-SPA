import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import _ from 'lodash';



class ShowHike extends Component {
	render(){
		const { id } = this.props.match.params;
		const { hikes } = this.props;
		
		// isolate hike user wants to see without modification to state
		const hike = hikes[id];
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
					<div className="row hike-main">
						<div className="col-lg-8 col-md-12, col-sm-12 col-xs-12">
							<div className="jumbotron show-jumbo container-fluid"></div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
								<ul>
									<li>Time</li>
									<li>Distance</li>
									<li>Difficulty</li>
									<li>Start Elevation</li>
									<li>End Elevation</li>
									<li>Camping Available?</li>
									<li>Region</li>
								</ul>
							</div>
					</div>
					<div className="row">
						<div className="container">
							<div className="col-lg-8 col-md-12, col-sm-12 col-xs-12">
								<p className="">{hike.description}</p>
							</div>
						</div>
					</div>
					<div className="container">
						<p className=""><strong><u>How to get there</u></strong> <br/> {hike.directions}</p>
					</div>
					<Link to="/hikes" className="pull-xs-right btn btn-primary">Back to Hikes</Link>
			</div>
	    </CSSTransitionGroup>
			
		);
	}
}

function mapStateToProps(state){
	return { hikes: state.hikes};
}

export default connect(mapStateToProps)(ShowHike);