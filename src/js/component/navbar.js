import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { LogInModal } from "./loginmodal";
import { Registration } from "./registration";
import { Confirmation } from "./confirmation";
import { Home } from "../views/home";
import { Context } from "../store/appContext";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Account } from "./account";

export const NavbarNew = () => {
	const [modal, setModal] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<Navbar expand="lg" className=" sticky navbar navbar-light font-weight-bold pt-3">
			<Navbar.Brand href="#home">
				<Link className="link registration-link nav-link text-white" to="/">
					Liberty Mall
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<div className="rightside ml-auto">
					<Nav className="text-white">
						{store.token !== null && store.token !== undefined ? (
							<>
								<Nav.Link className="nav-link text-white" href="#" as={Link} to="/account">
									Account
								</Nav.Link>
								<Nav.Link className="nav-link text-white" href="#" onClick={e => actions.logout()}>
									Log Out
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link className="nav-link text-white" href="#" onClick={e => setModal(true)}>
									Log In
								</Nav.Link>
								<Nav.Link className="nav-link text-white" href="#" as={Link} to="/registration">
									Register
								</Nav.Link>
							</>
						)}
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
							<Link className="fas fa-shopping-cart fa-lg text-white" to="/cart">
								<Badge variant="badge badge-danger ml-2">{actions.getQty()}</Badge>
							</Link>
						</Nav.Link>
					</Nav>
				</div>
				<LogInModal show={modal} onHide={e => setModal(false)} />
			</Navbar.Collapse>
		</Navbar>
	);
};
