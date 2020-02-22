import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import "../../styles/home.scss";

class ActiveCampaignForm extends Component {
	componentDidMount() {
		const script = document.createElement("script");

		script.src = "https://libertyexpress.activehosted.com/f/embed.php?id=3";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return (
			<>
				<div className="row">
					<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
						<div className="_form_3" />
					</div>
				</div>
			</>
		);
	}
}

export { ActiveCampaignForm };
