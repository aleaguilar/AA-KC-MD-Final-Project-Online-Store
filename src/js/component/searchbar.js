import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { HiwModal } from "./howitworks-modal";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Loading from "./loading";
import Modal from "react-bootstrap/Modal";

export const Searchbar = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);

	const handleKeyDown = e => {
		// check if enter was pressed
		if (e.keyCode === 13) {
			setLoading(true);
			runSearch();
		}
	};

	const handleSubmit = e => {
		if (input !== "") {
			e.preventDefault();
			setLoading(true);
			runSearch();
		}
	};

	const runSearch = () => {
		let submitSearch = actions.searchbarAPI(input);

		submitSearch.then(() => setLoading(false));
	};

	return (
		<div className="row">
			{isLoading ? <Loading /> : null}
			<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
				<div className="search p-0">
					<h1 className="h1sticky text-center pb-4">Buy just about everything</h1>
					<Form onSubmit={e => handleSubmit(e)}>
						<InputGroup className="mb-3 ml-1">
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
					{
						<Button
							type="button"
							className="search-button pt-2 mb-4"
							variant="success"
							onClick={e => setModal(true)}>
							How It Works
						</Button>
					}
					<HiwModal show={modal} onHide={e => setModal(false)} />
				</div>
			</div>
		</div>
	);
};
