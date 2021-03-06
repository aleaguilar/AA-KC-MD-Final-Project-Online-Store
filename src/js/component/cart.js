import React, { useState, useContext, useEffect } from "react";
import { Cards } from "./cards";
import { CartContext } from "./cartContext";
import { BestSeller } from "./bestseller";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import PropTypes from "prop-types";
import { PayPalButton } from "react-paypal-button-v2";

export const Cart = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.updateCartTotal();
		// console.log("qty is ", actions.getQty());
		//actions.removeFromCart();
	}, [store]);

	return (
		<div>
			<div className="container-fluid">
				<div className="Cart-context">
					<div className="container">
						<div className="row pb-4 cart-header">
							<div className="col-10 col-md-6">Product Name</div>
							<div className="col-4 col-md-2">Quantity</div>
							<div className="col-4 col-md-2">Remove</div>
							<div className="col-4 col-md-2">Price</div>
						</div>
						<hr />
						<div className="cart-body py-4">
							{store.cart.map((item, index) => (
								<div key={index} className="row py-3 cart-row">
									<div className="col-12 col-md-6">{item.name}</div>
									<div className="col-6 col-md-2">
										<i
											className="p-1 fas fa-arrow-alt-circle-up"
											onClick={() => {
												actions.increaseQty(index);
												actions.updateCartTotal();
											}}></i>
										{item.count}
										<i
											className="p-1 fas  fa-arrow-alt-circle-down"
											onClick={() => {
												actions.decreaseQty(index);
												actions.updateCartTotal();
											}}></i>
									</div>
									<div className="col-6 col-md-2">
										<i
											className="fa fa-trash"
											aria-hidden="true"
											onClick={() => {
												actions.deleteSingleItem(item.id);
												actions.updateCartTotal();
											}}></i>
									</div>
									<div className="col-6 col-md-2">{item.price}</div>
								</div>
							))}
						</div>
						<hr />

						<div className="row pb-4 cart-footer">
							<div className="offset-md-10 col-12 col-md-4">
								<button
									type="button"
									variant="light"
									className="btn btn-primary"
									onClick={() => {
										actions.removeAllItems();
										actions.updateCartTotal();
									}}>
									Remove all Items
								</button>
							</div>
							<div className="pt-2 offset-md-10 col-12 col-md-4">
								<strong> Subtotal:</strong> ${store.cartSubtotal}
							</div>
							<div className="offset-md-10 col-12 col-md-4">
								<strong> Tax:</strong> ${store.cartTaxes}
							</div>
							<div className="offset-md-10 col-12 col-md-4">
								<strong>Total:</strong> ${store.cartTotal}
							</div>
							<hr />
							<div className="offset-md-10 col-12 col-md-4">
								<PayPalButton
									amount={store.cartTotal}
									// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
									onSuccess={(details, data) => {
										alert("Transaction completed by " + details.payer.name.given_name);

										// OPTIONAL: Call your server to save the transaction
										//return fetch("/paypal-transaction-complete", {
										//  method: "post",
										//     body: JSON.stringify({
										//     orderID: data.orderID
										//     })
										// });
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
