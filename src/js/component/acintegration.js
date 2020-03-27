import React, { useState, useContext, Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; //I think the error was that I'm calling createContact that is stored as an action in Context but I wasn't importing context. /* <p>Be always on the loop!</p>
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
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
							<div className="_form_3" />
							<p className="text-center">Subscribe to our email list to get our latest offers</p>
							<input placeholder="Your email here" onChange={e => setEmail(e.target.value)} />
							<button
								onClick={() => {
									actions.createContact(email);
								}}>
								Subscribe
							</button>
							{store.message != null ? <div>{store.message}</div> : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
