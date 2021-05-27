//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function ElCounter(props) {
	return (
		<div>
			<div className="min">{props.segUnit}</div>
		</div>
	);
}

ElCounter.propTypes = {
	segUnit: PropTypes.number,
	minUnit: PropTypes.number
};

let counter = 0;

setInterval(function() {
	const seg = Math.floor(Math.floor(counter) / 1);
	
	console.log(seg);
	counter++;
	ReactDOM.render(
		<ElCounter segUnit={counter} />,
		document.querySelector("#app")
	);
}, 1000);
