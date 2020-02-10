import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light font-weight-bold pt-3">
			<a className="navbar-brand text-white" href="#">
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
			<div className="collapse navbar-collapse text-white" id="navbarNavDropdown">
				<div className="rightside ml-auto">
					<ul className="navbar-nav text-white">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Categories <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								About Us
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Testimonials
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								FAQ
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Shipping
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
