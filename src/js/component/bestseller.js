import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import { Cards } from "./cards";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { CartContext } from "./cartContext";
import { Context } from "../store/appContext";
import { CardProvider } from "./cartContext";

export const BestSeller = props => {
	const { store, actions } = useContext(Context);

	const addToCart = () => {
		const database = {
			name: props.name,
			price: props.price,
			id: props.id,
			image: props.image
		};
		actions.addToCart(database);
	};

	return (
		<div className="container">
			{store.showResults ? (
				<>
					<h1 className="text-center pb-4">
						{store.showEmpty ? "No results available, please search for other products." : "Search Results"}{" "}
					</h1>
				</>
			) : (
				<>
					<h1 className="text-center pb-4">Featured Products</h1>
				</>
			)}
			<CardDeck className="row w-100">
				{store.database.map((item, index) => {
					let price = item["prices"] ? item["prices"][0].raw : "$99.99";

					return <Cards name={item.title} price={price} image={item.image} key={item.asin} id={item.asin} />;
				})}
			</CardDeck>
		</div>
	);
};

BestSeller.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string
};
