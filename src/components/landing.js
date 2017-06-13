import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Landing extends Component {
	render(){
		return (
			<CSSTransitionGroup
		    transitionName="index"
	      transitionAppear={true}
		    transitionAppearTimeout={500}
			  transitionEnter={false}
				transitionLeave={false}>
		    	<div>
						<div id="landing-jumbo" className="jumbotron container-fluid" >
							<div className="container">
								<div className="Headline">
									<h3>Good for the mind and the body</h3>
									<Link id="index-btn" to='/hikes' className="btn btn-lg btn-default">Get out and Hike</Link>
								</div>
							</div>
						</div>				
					</div>
		   </CSSTransitionGroup>
		);
	}
}

export default Landing;