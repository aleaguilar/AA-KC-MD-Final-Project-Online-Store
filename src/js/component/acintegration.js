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
			<div className="subscription h4 font-weight-bold">
				<div className="row">
					<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
						<div className="h4 font-weight-bold _form_3 " />
						<p>Subscribe to our email list to get our latest offers</p>
						<p>Email (Required)</p>

						<input onChange={e => setEmail(e.target.value)} className="width: 50rem " />
						<button
							onClick={() => {
								createContact(email)
									.then(() => setMessage("Thank you for subscribing!"))
									.catch(err => {
										console.log(err);
										setMessage(err.message);
									});
							}}>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
