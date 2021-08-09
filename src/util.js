import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
	cases: {
		hex: "#CC1034",
		rgb: "rgb(204, 16, 52)",
		half_op: "rgba(204, 16, 52, 0.5)",
		multiplier: 800,
	},
	recovered: {
		hex: "#7dd71d",
		rgb: "rgb(125, 215, 29)",
		half_op: "rgba(125, 215, 29, 0.5)",
		multiplier: 1200,
	},
	deaths: {
		hex: "#fb4443",
		rgb: "rgb(251, 68, 67)",
		half_op: "rgba(251, 68, 67, 0.5)",
		multiplier: 2000,
	},		
};

export const sortData = (data) => {
	const sortedData = [...data];

	return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1 ));
};

//Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType='cases') => (
	data.map(country => (
		<Circle
			center={[country.countryInfo.lat, country.countryInfo.long]}
			fillOpacity={0.4}
		>

		</Circle>
	))		
);