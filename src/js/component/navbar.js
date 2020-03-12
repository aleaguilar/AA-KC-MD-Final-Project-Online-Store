import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { LogInModal } from "./loginmodal";
import { Registration } from "./registration";
import { Home } from "../views/home";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavbarNew = () => {
	const [modal, setModal] = useState(false);
	return (
		<Navbar expand="lg" className="navbar navbar-light font-weight-bold pt-3">
			<Navbar.Brand href="#home">
				<Link className="link registration-link nav-link text-white" to="/">
					Liberty Mall
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<div className="rightside ml-auto">
					<Nav className="text-white">
						<Nav.Link className="nav-link text-white" href="#" onClick={e => setModal(true)}>
							Log In
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							<Link className="link registration-link nav-link" to="/registration">
								Register
							</Link>
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							FAQ
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							Contacts
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							About Us
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							<i className="fas fa-shopping-cart fa-lg"></i>
						</Nav.Link>
					</Nav>
				</div>
				<LogInModal show={modal} onHide={e => setModal(false)} />
			</Navbar.Collapse>
		</Navbar>
	);
};
