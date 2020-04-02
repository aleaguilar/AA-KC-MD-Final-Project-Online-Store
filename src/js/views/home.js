import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Searchbar } from "../component/searchbar";
import { Cards } from "../component/cards";
import { ActiveCampaignForm } from "../component/acintegration";
import { BestSeller } from "../component/bestseller";
import { Account } from "../component/account";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//const [store, setStore] = useStore();
	useEffect(() => {
		//const store = getStore();
		const token = JSON.parse(localStorage.getItem("usertoken"));

		actions.saveToken(token);
	}, []);
	return (
		<div>
			<Searchbar />
			<BestSeller />
			<ActiveCampaignForm />
			<div className="container-fluid">
				<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12">
					<div className="common-objections m-0 p-0">
						<h1 className="pt-4">Common Objections</h1>
						<p>
							All orders are processed and dispatched within 24 hours of receipt. Orders received after
							12:00 PM EST will be processed the next business day. If a product is on backorder, we will
							notify you via phone or e-mail. FedEx ground service is our standard shipping method. All
							products may be returned for a full refund within 30 days of the original purchase date.
						</p>
						<br />
						<p className="pb-4">
							We offer international shipping for all our items. Please note that your order may be
							subject to taxes and/or import duties imposed by Customs when your order reaches your
							country. We accept both PayPal and credit cards for international orders. All international
							packages are shipped via DHL.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
