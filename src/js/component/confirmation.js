import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { LogInModal } from "./loginmodal";
import Card from "react-bootstrap/Card";

export const Confirmation = () => {
	const [modal, setModal] = useState(false);
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center pt-5">
			<div className="text-center pt-5">
				<h1 style={{ paddingTop: 50 }}>Thank you for registering with Liberty Mall!</h1>
				<p>Now you are able to shop and get the best deals!</p>
				<p>Paste any link from Amazon here and we will quote the full landed price to COUNTRY</p>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Button className="btn-lg mt-2" type="submit" onClick={e => setModal(true)}>
								Login!
							</Button>
						</div>
						<div className="col-6">
							<Button className="btn-lg mt-2" type="submit">
								<Link className="text-decoration-none text-white" to="/">
									Start Shopping!
								</Link>
							</Button>
						</div>
					</div>
				</div>

				<LogInModal show={modal} onHide={e => setModal(false)} />
			</div>
		</div>
	);
};
