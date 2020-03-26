import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export const Searchbar = () => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	return (
		<div className="row">
			<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
				<div className="search p-0">
					<h1 className="h1sticky text-center pb-4">Buy just about everything</h1>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Search for Anything"
							aria-label="searchbar"
							aria-describedby="basic-addon2"
							onChange={e => setInput(e.target.value)}
						/>
						<InputGroup.Append>
							<Button onClick={() => actions.searchbarAPI(input)} variant="success">
								Go!
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<Button className="search-button" variant="success">
						How It Works
					</Button>
				</div>
			</div>
		</div>
	);
};
