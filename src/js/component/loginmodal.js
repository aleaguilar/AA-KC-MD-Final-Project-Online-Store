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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);
	const { onHide } = props;
	const handleLogin = () => {
		let result = new Promise((resolve, reject) => {
			actions.login(email, password);
			setTimeout(() => {
				resolve();
			}, 500);
		});

		result.then(res => {
			console.log(result);
			if (result && store.token !== null && store.token !== undefined) {
				if (!remember) {
					setPassword("");
					setEmail("");
					onHide();
				} else {
					// We want to remember the user.
					// Need to store a value in the localStorage that we can check on load.
					onHide();
				}
			}
		});
	};

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
							<Form.Control
								type="email"
								value={email}
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
						<Form.Label column sm={2}>
							Password
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								value={password}
								type="password"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
						</Col>
					</Form.Group>
					{store.token === undefined ? (
						<p className="text-danger">Failed to login. Please check your credentials and try again.</p>
					) : null}
					<Form.Group as={Row} controlId="formHorizontalCheck">
						<Col sm={{ span: 10, offset: 2 }}>
							<Form.Check onChange={e => setRemember(!remember)} checked={remember} label="Remember me" />
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button onClick={handleLogin} type="button">
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
