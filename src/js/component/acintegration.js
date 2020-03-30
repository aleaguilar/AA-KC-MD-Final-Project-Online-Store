import React, { useState, useContext, Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/home.scss";

export const ActiveCampaignForm = () => {
	const [message, setMessage] = useState(null);
	const [email, setEmail] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<>
			{message && <p>{message}</p>}
			<div className="container-fluid">
				<div className="row">
					<div className="subscription">
						<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
							<h5 className="text-center pb-2">Subscribe to our email list to get our latest offers</h5>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Your email here"
									onChange={e => setEmail(e.target.value)}
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
								/>
								<InputGroup.Append>
									<Button
										className="rounded-right"
										onClick={() => {
											actions.createContact(email);
										}}>
										Subscribe
									</Button>
									{store.message != null ? <div>{store.message}</div> : null}
								</InputGroup.Append>
							</InputGroup>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
