import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";

function LineGraph() {
	const [data, setData] = useState({});

	// https://disease.sh/v3/covid-19/historical/all?lastdays=120

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
		.then(response => response.json())
		.then(data => {
			// do something to the retrieved data
			console.log(data);
		})
	}, [])

	const buildChartData = data => {
		const chartData = [];
		let lastDataPoint;
		data.cases.forEach(case => {
			if (lastDataPoint) {
				const newDataPoint = {
					x: date,
					y: data['cases'][date] - lastDataPoint
				}
				chartData.push(newDataPoint);
			}
			lastDataPoint = data['cases'][date];
		})
		return chartData;
	}

	return (
		<div>
			<h1>Graph goes here</h1>
			{/* <Line data options /> */}
		</div>
		)
}

export default LineGraph