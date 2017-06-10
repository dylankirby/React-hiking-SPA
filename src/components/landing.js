import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
	render(){
		return (
			<div>
				<div className="jumbotron landing-jumbo container-fluid">
					<div className="container">
						<div className="Headline">
							<h3>Good for the mind and the body</h3>
							<Link id="index-btn" to='/hikes' className="btn btn-lg btn-default">Get out and Hike</Link>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

export default Landing;