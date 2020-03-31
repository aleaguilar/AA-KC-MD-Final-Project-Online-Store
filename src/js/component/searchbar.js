import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { hiwModal } from "./howitworks-modal";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

export const Searchbar = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);

	const spinnerContainerStyles = {
		width: "200px",
		height: "200px",
		top: "calc( 50% - ( 200px / 2) )",
		right: "calc( 50% - ( 200px / 2) )",
		zIndex: 9999
	};

	const spinnerStyles = {
		width: "150px",
		height: "150px",
		borderWidth: ".5rem",
		boxShadow: "0 0 3px white"
	};

	const handleKeyDown = e => {
		// check if enter was pressed
		if (e.keyCode === 13) {
			runSearch();
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		runSearch();
	};

	const runSearch = () => {
		setLoading(true);

		actions.searchbarAPI(input);

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	return (
		<div className="row">
			{isLoading ? (
				<div style={spinnerContainerStyles} className="position-absolute">
					<div className="w-100 h-100 d-flex align-items-center justify-content-center">
						<Spinner animation="border" variant="success" style={spinnerStyles} />
						{/* <h2 className="text-center">Loading...</h2> */}
					</div>
				</div>
			) : null}
			<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
				<div className="search p-0">
					<h1 className="h1sticky text-center pb-4">Buy just about everything</h1>
					<Form onSubmit={e => handleSubmit(e)}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Search for Anything"
								aria-label="searchbar"
								aria-describedby="basic-addon2"
								onChange={e => setInput(e.target.value)}
								onKeyDown={e => handleKeyDown(e)}
							/>
							<InputGroup.Append>
								<Button variant="success" type="submit">
									Go!
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
					<Button
						type="button"
						className="search-button pt-2 mb-4"
						variant="success"
						onClick={e => setModal(true)}>
						How It Works
					</Button>
					<hiwModal show={modal} onHide={e => setModal(false)} />
				</div>
			</div>
		</div>
	);
};
