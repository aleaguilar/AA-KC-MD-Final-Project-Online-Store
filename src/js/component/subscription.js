import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Subscription = () => (
	<div className="row">
		<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
			<div className="subscription m-0 p-5">
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
		</div>
	</div>
);
