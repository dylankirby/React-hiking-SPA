import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
	render(){
		return (
			<div className="">
				<nav className="navbar navbar-default">
 					<div className="container-fluid">
    				<div className="navbar-header">
      				<a className="navbar-brand" href="#">
        				<img alt="Brand" src="..." />
      				</a>
    				</div>
  				</div>
				</nav>
				<div className="jumbotron container-fluid"></div>
				<div>Landing Page</div>
				<Link to='/hikes' className="btn btn-primary">See our hikes</Link>
			</div>
		);
	}
}

export default Landing;