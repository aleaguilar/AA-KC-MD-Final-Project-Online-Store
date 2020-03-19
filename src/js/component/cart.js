import React, { useState, useContext, useEffect } from "react";
import { Cards } from "./cards";
import { CartContext } from "./cartContext";
import { BestSeller } from "./bestseller";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import PropTypes from "prop-types";

export const Cart = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.updateCartTotal();
		// console.log("qty is ", actions.getQty());
	}, [store]);

	return (
		<div>
			<div className="container-fluid">
				<div className="Cart-context">
					<div className="container">
						<div className="row pb-4 cart-header">
							<div className="col-12 col-md-8">Product Name</div>
							<div className="col-6 col-md-2">Quantity</div>
							<div className="col-6 col-md-2">Price</div>
						</div>
						<div className="cart-body py-4">
							{store.cart.map((item, index) => (
								<div key={index} className="row py-3 cart-row">
									<div className="col-12 col-md-8">{item.name}</div>
									<div className="col-6 col-md-2">{item.count}</div>
									<div className="col-6 col-md-2">{item.price}</div>
								</div>
							))}
						</div>
						<div className="row pb-4 cart-footer">
							<div className="offset-md-8 col-12 col-md-4">
								<strong>Total:</strong> ${store.cartTotal}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
