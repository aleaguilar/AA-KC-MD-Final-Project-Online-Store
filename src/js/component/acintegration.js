import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import "../../styles/home.scss";

class ActiveCampaignForm extends Component {
	componentDidMount() {
		const script = document.createElement("script");

		script.src = "https://libertyexpress.activehosted.com/f/embed.php?id=3";
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return <div className="_form_3" />;
	}
}

export { ActiveCampaignForm };
