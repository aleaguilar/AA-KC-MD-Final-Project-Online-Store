import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light pt-3">
			<a className="navbar-brand" href="#">
				Navbar
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
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<div className="rightside ml-auto">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Categories <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								About Us
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Testimonials
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								FAQ
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Shipping
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
