	componentDidMount(){
		this.HikeSearch();
	}



	renderHikeList(){
		const { hikes, coords } = this.props;

		if(hikes.constructor === Array){
			
		} else {
			return(
				<div>
					<p className="text-center text-xs-center">
						Spinner goes here, how???
					</p>
				</div>
			)
		}
	}

  render() {
  	console.log(this.props.coords);
  	if(!this.props.isGeolocationAvailable && !this.props.isGeolocationEnabled){
  		return(
  			<div>
  				<div>Geolocation not available</div>
					<div>Search Bar --- Hooked up to action for doing hike by city search</div>
  			</div>
  		);
  	}
  	// 	if(this.props.coords){
  	// 		this.geoHikeSearch();
  	// 		return(<div>Getting you some fun hikes!</div>)
  	// 	}
  	return (
  		
  		
   	);
  }