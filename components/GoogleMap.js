import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './svg/MapMarker';

const AnyReactComponent = () => (
	<div>
		<MapMarker />
		<style>
			{`

			`}
		</style>
	</div>
);

class GoogleMap extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			center: {
				lat: 46.278086,
				lng: 16.174056
			},
			zoom: 7,
			markers:  [
				[46.278086, 16.174056],
				[45.278086, 15.174056],
				[47.278086, 17.174056]
			]
		}
	}

	render() {

		const markers = this.state.markers.map((marker, i) => {
			return <AnyReactComponent lat={marker[0]} lng={marker[1]} key={i} />
		})

		return (
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'GOOGLEAPIKEY'
					}}
					defaultCenter={this.state.center}
					defaultZoom={this.state.zoom}
				>
					{markers}
				</GoogleMapReact>
			</div>
		);
	}
}

export default GoogleMap;
