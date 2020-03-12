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
					<Nav className="collapse navbar-collapse text-white">
						<Nav.Link className="nav-link text-white" href="#" onClick={e => setModal(true)}>
							Log In
						</Nav.Link>
						<Nav.Link className="nav-link text-white" href="#">
							<Link className="link registration-link nav-link text-white" to="/registration">
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

{
	/* <nav className="navbar navbar-expand-lg navbar-light font-weight-bold pt-3">
		// 	<Link className="link registration-link nav-link text-white" to="/">
		// 		Liberty Mall
		// 	</Link>
		// 	<button */
}
// 		className="navbar-toggler"
// 		type="button"
// 		data-toggle="collapse"
// 		data-target="#navbarNavDropdown"
// 		aria-controls="navbarNavDropdown"
// 		aria-expanded="false"
// 		aria-label="Toggle navigation">
// 		<span className="navbar-toggler-icon"></span>
// 	</button>
// 	<div className="collapse navbar-collapse text-white" id="navbarNavDropdown">
// 		<div className="rightside ml-auto">
// 			<ul className="navbar-nav text-white">
// 				<li className="nav-item active">
// 					<a className="nav-link text-white" href="#" onClick={e => setModal(true)}>
// 						Log In
// 					</a>
// 				</li>
// 				<li className="nav-item active">
// 					<Link className="link registration-link nav-link text-white" to="/registration">
// 						Register
// 					</Link>
// 				</li>
// 				<li className="nav-item active">
// 					<a className="nav-link text-white" href="#">
// 						FAQ
// 					</a>
// 				</li>
// 				<li className="nav-item active">
// 					<a className="nav-link text-white" href="#">
// 						Contacts
// 					</a>
// 				</li>
// 				<li className="nav-item active">
// 					<a className="nav-link text-white" href="#">
// 						About Us
// 					</a>
// 				</li>
// 				<li className="nav-item active">
// 					<a className="nav-link text-white" href="#">
// 						<i className="fas fa-shopping-cart fa-lg"></i>
// 					</a>
// 				</li>
// 			</ul>
// 		</div>
// 		<LogInModal show={modal} onHide={e => setModal(false)} />
// 	</div>
// </nav>
// 	);
// };
