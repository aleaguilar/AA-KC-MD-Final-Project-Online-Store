import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Confirmation } from "./confirmation";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Registration = props => {
	const { store, actions } = useContext(Context);
	const [validated, setValidated] = useState(false);
	const [name, setName] = useState(false);
	const [lastname, setLastname] = useState(false);
	const [email, setEmail] = useState(false);
	const [address, setAddress] = useState(false);
	const [city, setCity] = useState(false);
	const [country, setCountry] = useState(false);
	const [password, setPassword] = useState(false);

	const handleSubmit = event => {
		const form = event.target;
		event.preventDefault();
		event.stopPropagation();
		if (form.checkValidity() === true) {
			setValidated(true);
			actions.createUser(name, lastname, email, address, city, country, password, props.history);
		}
	};

	return (
		<div className="container p-4" style={{ marginTop: "5rem" }}>
			<Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
				<Form.Row>
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>First name</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="First name"
							onChange={e => setName(e.target.value)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Last name"
							onChange={e => setLastname(e.target.value)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							required
							onChange={e => setPassword(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="6" controlId="validationEmail">
						<Form.Label>E-mail</Form.Label>
						<InputGroup>
							<Form.Control
								type="email"
								placeholder="E-mail"
								aria-describedby="inputGroupPrepend"
								required
								onChange={e => setEmail(e.target.value)}
							/>
							<Form.Control.Feedback type="invalid">Please insert valid e-mail.</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
					<Form.Group as={Col} md="6" controlId="validationCustom03">
						<Form.Label>Address</Form.Label>
						<Form.Control
							type="text"
							placeholder="Address"
							required
							onChange={e => setAddress(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">Please provide a valid address.</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="3" controlId="validationCustom03">
						<Form.Label>City</Form.Label>
						<Form.Control type="text" placeholder="City" required onChange={e => setCity(e.target.value)} />
						<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="validationCustom04">
						<Form.Label>Country</Form.Label>
						<Form.Control
							type="text"
							placeholder="Country"
							required
							onChange={e => setCountry(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">Please provide a valid country.</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Check
						required
						label="Agree to terms and conditions"
						feedback="You must agree before submitting."
					/>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
};
Registration.propTypes = { history: PropTypes.object };
