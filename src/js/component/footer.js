import React, { Component } from "react";
import "../../styles/home.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Container>
			<Row>
				<Col>
					<ul>
						<li className="h4 font-weight-bold">Solutions and Support</li>
						<li>
							Our company will go the extra mile to analyze the particular project in detail, and offer a
							business solution that will meet your requirements.
						</li>
					</ul>
				</Col>
				<Col>
					<ul className="pl-0">
						<li className="h4 font-weight-bold">Products</li>
						<li>Guidelines</li>
						<li>Services</li>
						<li>Pricing</li>
					</ul>
				</Col>
				<Col>
					<ul className="pl-0">
						<li className="h4 font-weight-bold">About Us</li>
						<li>Contacts</li>
						<li>Our Mission</li>
						<li>Careers</li>
					</ul>
				</Col>
				<Col>
					<ul className="pl-0">
						<li className="h4 font-weight-bold">Support</li>
						<li>Terms &#38; Condition</li>
						<li>Contact Us</li>
						<li>Private Policy</li>
					</ul>
				</Col>
			</Row>
		</Container>
		<div>
			<p className="text-align-center">Created by KC - AA - MD All Rights Reserved</p>
		</div>
	</footer>
);
