import React from 'react'
import { Card, CardContent, Typography } from "@material-ui";

function InfoBox({ title, cases, total }) {
	return (
		<Card>
			<CardContent>
				{/* Title i.e. Coronavirus cases */}
				<Typography color="textSecondary">
					{title}
				</Typography>

				{/* +120 Number of cases */}

				{/* 1.2M Total */}
			</CardContent>
		</Card>
	)
}

export default InfoBox