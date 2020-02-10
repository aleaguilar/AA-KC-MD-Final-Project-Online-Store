import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Subscription = () => (
	<div className="subscription">
		<h1 className="text-center pb-4 text-white">Email Subscription</h1>
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Button className="subscription-button" variant="success" type="submit">
				Submit
			</Button>
		</Form>
	</div>
);
