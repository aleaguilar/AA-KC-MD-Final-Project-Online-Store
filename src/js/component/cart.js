import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Cart() {
	const [cart, setCart] = useContext(CartContext);
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<div>
			<span>items in cart : {cart.length}</span>
			<br />
			<span>total price : {totalPrice}</span>
		</div>
	);
}
