import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export const Confirmation = () => {
	return (
		<div className="text-center pt-5">
			<h1>Thank you for registering with Liberty Mall!</h1>
			<p>Now you are able to shop and get the best deals!</p>
			<p>Paste any link from Amazon here and we will quote the full landed price to COUNTRY</p>
			<InputGroup className="mb-3 pr-5 pl-5">
				<FormControl placeholder="Search for Anything" aria-label="searchbar" aria-describedby="basic-addon2" />
				<InputGroup.Append>
					<Button variant="success">Go!</Button>
				</InputGroup.Append>
			</InputGroup>
		</div>
	);
};

<Confirmation />;
