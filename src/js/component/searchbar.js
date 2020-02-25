import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export const Searchbar = () => (
	<div className="row">
		<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
			<div className="search m-0 p-0">
				<h1 className="text-center pb-4">Buy just about everything</h1>
				<p>Paste any link from Amazon here and we will quote the full landed price to COUNTRY</p>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Search for Anything"
						aria-label="searchbar"
						aria-describedby="basic-addon2"
					/>
					<InputGroup.Append>
						<Button variant="success">Go!</Button>
					</InputGroup.Append>
				</InputGroup>
				<Button className="search-button" variant="success">
					How It Works
				</Button>
			</div>
		</div>
	</div>
);
