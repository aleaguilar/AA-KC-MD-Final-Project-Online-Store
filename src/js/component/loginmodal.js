import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const LogInModal = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);
	const { onHide } = props;
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header className="modal-header">
				<Modal.Title className="text-white" id="contained-modal-title-vcenter">
					Liberty Mall
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							Email
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
						<Form.Label column sm={2}>
							Password
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalCheck">
						<Col sm={{ span: 10, offset: 2 }}>
							<Form.Check label="Remember me" />
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button onClick={() => actions.login(email, password)} type="button">
								Sign in
							</Button>
						</Col>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

LogInModal.propTypes = {
	onHide: PropTypes.func
};
