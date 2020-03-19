import React, { useState } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

	return <CartContext.Provider value={[cart, setCart]}>{props.children}</CartContext.Provider>;
};

CartProvider.propTypes = {
	children: PropTypes.string
};
