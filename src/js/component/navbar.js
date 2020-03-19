import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { LogInModal } from "./loginmodal";
import { Registration } from "./registration";
import { Confirmation } from "./confirmation";
import { Home } from "../views/home";
<<<<<<< HEAD
import { Context } from "../store/appContext";
import Badge from "react-bootstrap/Badge";
=======
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
>>>>>>> origin

export const NavbarNew = () => {
	const [modal, setModal] = useState(false);
<<<<<<< HEAD
	const { store, actions } = useContext(Context);

=======
>>>>>>> origin
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
<<<<<<< HEAD
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
							<Link className="fas fa-shopping-cart fa-lg text-white" to="/cart">
								<Badge variant="light">{actions.getQty()}</Badge>
							</Link>
						</li>
					</ul>
=======
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
>>>>>>> origin
				</div>
				<LogInModal show={modal} onHide={e => setModal(false)} />
			</Navbar.Collapse>
		</Navbar>
	);
};
