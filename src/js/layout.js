import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarNew } from "./component/navbar";
import { Searchbar } from "./component/searchbar";
import { Cards } from "./component/cards";
import { ActiveCampaignForm } from "./component/acintegration";
import { Footer } from "./component/footer";
import { LogInModal } from "./component/loginmodal";
import { Registration } from "./component/registration";
import { Confirmation } from "./component/confirmation";
import { Cart } from "./component/cart";
import { Account } from "./component/account";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavbarNew />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/demo" component={Demo} />
						<Route exact path="/registration" component={Registration} />
						<Route exact path="/confirmation" component={Confirmation} />
						<Route exact path="/registration/confirmation" component={Confirmation} />
						<Route exact path="/cart" component={Cart} />
						<Route exapct path="/account" component={Account} />
						<Route exact path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
