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

export const HiwModal = props => {
	const { onHide } = props;

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header>
				<Modal.Title className="text-white" id="contained-modal-title-vcenter">
					How Liberty Mall Works!
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h5 className="pt-3 pb-3">
					At the search bar, type in any item you want to search for and just click go!
				</h5>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

HiwModal.propTypes = {
	onHide: PropTypes.func
};
