import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";

function Home() {
	return (
		<>
			<div className="top">
				<div class="info">
					<div class="large">Get Fit Go!</div>
					<div class="small">
						All progress takes place outside the comfort zone
					</div>
				</div>
				<div className="buttons">
					<Button variant="contained" color="default">
						Book Appointment
					</Button>
					<br />
					<Button variant="contained" color="default">
						Visit us
					</Button>
				</div>
			</div>
		</>
	);
}

export default Home;
