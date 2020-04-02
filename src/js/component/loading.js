import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
	const spinnerContainerStyles = {
		width: "200px",
		height: "200px",
		top: "calc( 50% - ( 200px / 2) )",
		right: "calc( 50% - ( 200px / 2) )",
		zIndex: 9999
	};

	const spinnerStyles = {
		width: "150px",
		height: "150px",
		borderWidth: ".5rem",
		boxShadow: "0 0 3px white"
	};

	return (
		<div style={spinnerContainerStyles} className="position-absolute">
			<div className="w-100 h-100 d-flex align-items-center justify-content-center">
				<Spinner animation="border" variant="success" style={spinnerStyles} />
			</div>
		</div>
	);
};

export default Loading;
