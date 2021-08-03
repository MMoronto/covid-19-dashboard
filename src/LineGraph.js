import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

const options = {
	legend: {
		display: false;
	},
	elements: {
	point: {
		radius: 0,
		},
	},
	maintainAspectRatio: false,
	tooltips: {
		mode: "index",
		intersect: false,
		callbacks: {
			label: function (tooltipItem, data) {
				return numeral(tooltipItem.value).format("+0,0");
			},
		},
	},
}


function LineGraph() {
	const [data, setData] = useState({});

	// https://disease.sh/v3/covid-19/historical/all?lastdays=120

	const buildChartData = (data, casesType= "cases") => {
		const chartData = [];
		let lastDataPoint;
		for(let date in data.cases) {
		// data[casesType].forEach(date => {
			if (lastDataPoint) {
				const newDataPoint = {
					x: date,
					y: data[casesType][date] - lastDataPoint
				};
				chartData.push(newDataPoint);
			}
			lastDataPoint = data[casesType][date];
		}
		return chartData;
	};

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
		.then(response => response.json())
		.then(data => {
			let chartData = buildChartData(data, 'cases');
			console.log(chartData);

			setData(chartData);
		});
	}, []);

	return (
		<div>
			<h1>Graph goes here</h1>
			<Line 
			options={options}
			data={{
				datasets: [
				{
					backgroundColor: "rgba(204, 16, 52, 0.5)",
					borderColor: "#CC1034",
					data: data,
				},
			],
			}} />
		</div>
		);
}

export default LineGraph