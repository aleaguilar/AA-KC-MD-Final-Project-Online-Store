import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { LogInModal } from "./loginmodal";

export const Navbar = () => {
	const [modal, setModal] = useState(false);

	return (
		<div className="row">
			<nav className=" sticky navbar navbar-expand-lg navbar-light font-weight-bold pt-3">
				<a className="navbar-brand text-white" href="#">
					Liberty Mall
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse text-white" id="navbarNavDropdown">
					<div className="rightside ml-auto">
						<ul className="navbar-nav text-white">
							<li className="nav-item active">
								<a className="nav-link text-white" href="#" onClick={e => setModal(true)}>
									Log In
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									Register
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									FAQ
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									Contacts
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									About Us
								</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									Cart
								</a>
							</li>
						</ul>
					</div>
				</div>
				<LogInModal show={modal} onHide={e => setModal(false)} />
			</nav>
		</div>
	);
};
