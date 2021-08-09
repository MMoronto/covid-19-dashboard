import React from 'react';
import "./Map.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function Map({ center, zoom }) {
	return (
		<div className="map">
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer 
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' />
			</LeafletMap>
		</div>
	);
}

export default Map;