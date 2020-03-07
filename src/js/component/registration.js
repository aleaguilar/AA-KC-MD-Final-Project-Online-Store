import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

export const Registration = () => {
	const [validated, setValidated] = useState(false);
	const [firstname, setFirstname] = useState(false);
	const [lastname, setLastname] = useState(false);
	const [email, setEmail] = useState(false);
	const [city, setCity] = useState(false);
	const [state, setState] = useState(false);
	const [zipcode, setZipcode] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div className="container p-4">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>First name</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="First name"
							onChange={e => setFirstname(e.target.value)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Label>Last name</Form.Label>
						<Form.Control required type="text" placeholder="Last name" onChange={e => setLastname(e.target.value)}/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationEmail">
						<Form.Label>E-mail</Form.Label>
						<InputGroup>
							<Form.Control
								type="text"
								placeholder="E-mail"
								aria-describedby="inputGroupPrepend"
                                required
                                onChange={e => setEmail(e.target.value)}
							/>
							<Form.Control.Feedback type="invalid">Please insert valid e-mail.</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md="6" controlId="validationCustom03">
						<Form.Label>City</Form.Label>
						<Form.Control type="text" placeholder="City" required onChange={e => setCity(e.target.value)}/>
						<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="validationCustom04">
						<Form.Label>State</Form.Label>
						<Form.Control type="text" placeholder="State" required onChange={e => setState(e.target.value)}/>
						<Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="validationCustom05">
						<Form.Label>Zip</Form.Label>
						<Form.Control type="text" placeholder="Zip" required onChange={e => setZipcode(e.target.value)}/>
						<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Check
						required
						label="Agree to terms and conditions"
						feedback="You must agree before submitting."
					/>
				</Form.Group>
				<Button
					type="submit"
					onClick={() => {
						console.log({ firstname }, { lastname}, {state});
					}}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

<Registration />;
