import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Searchbar } from "./searchbar";
import { Context } from "../store/appContext";
import { Cards } from "./cards";
import CardDeck from "react-bootstrap/CardDeck";

export const Confirmation = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center pt-5">
			<h1 style={{ paddingTop: 50 }}>Thank you for registering with Liberty Mall!</h1>
			<p>Now you are able to shop and get the best deals!</p>
			<p>Paste any link from Amazon here and we will quote the full landed price to COUNTRY</p>
			<Searchbar />
			<CardDeck className="row w-100">
				{store.database.map(item => {
					return (
						<Cards
							name={item.title}
							// price={item.price.value}
							image={item.image}
							key={item.asin}
							id={item.asin}
						/>
					);
				})}
			</CardDeck>
		</div>
	);
};
