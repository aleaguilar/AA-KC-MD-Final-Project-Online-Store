import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export const Account = () => {
	return (
		<div className="container-fluid" style={{ paddingTop: 150 }}>
			<h1 className="pb-3, pl-5">Your Account</h1>
			<Accordion className="p-5 ">
				<Card className="card-top col-sm p-0">
					<Accordion.Toggle className="accordion-toggle-top" as={Card.Header} eventKey="0">
						Personal Information
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>Update Information</Card.Body>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="0">
						<Card.Body>Change Password</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card className="card-bottom col-sm p-0">
					<Accordion.Toggle className="accordion-toggle-bottom" as={Card.Header} eventKey="1">
						Orders
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Tracking Information</Card.Body>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Past Orders</Card.Body>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="1">
						<Card.Body>Returns and Exchanges</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};
