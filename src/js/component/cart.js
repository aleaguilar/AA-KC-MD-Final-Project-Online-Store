import React, { useState, useContext, useEffect } from "react";
import { Cards } from "./cards";
import { CartContext } from "./cartContext";
import { BestSeller } from "./bestseller";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import PropTypes from "prop-types";

export const Cart = () => {
	const { store, actions } = useContext(Context);
	//const { image } = item;

	useEffect(() => {
		actions.updateCartTotal();
		// console.log("qty is ", actions.getQty());
	}, [store]);

	return (
		<div>
			<div className="container-fluid text-center d-none d-lg-block">
				<div className="Cart-context">
					<div className="container">
						<div className="row pb-4 my-1 text-center cart-header">
							<div className="col-12 col-md-2">Image</div>
							<div className="col-10 col-md-5">Product Name</div>
							<div className="col-6 col-md-2">Quantity</div>
							<div className="col-6 col-md-2">Price</div>
							<div className="col-6 col-md-1">Remove</div>
						</div>
						<div className="cart-body py-4">
							{store.cart.map((item, index) => (
								<div key={index} className="row py-3 cart-row">
									<div className="col-12 col-md-2">
										<img
											src={Image}
											style={{ width: "5rem", heigth: "5rem" }}
											className="img-fludi"></img>
									</div>
									<div className="col-10 col-md-5">{item.name}</div>
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
