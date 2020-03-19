import { Redirect } from "react-router-dom";

const apiHost = "https://3000-ec28e99f-079c-4f95-8f5f-297b1cb48cc8.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: "",
			create_user: "",
			token: ""
		},
		actions: {
			createContact: email => {
				fetch(apiHost + "/subscribe", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						contact: {
							email: email
						}
					})
				})
					.then(resp => resp.json())
					.then(response => {
						setStore({ message: response.message });
					});
			},
			createUser: (name, lastname, email, address, city, country, password, history) => {
				let store = getStore();
				fetch(apiHost + "/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						lastname: lastname,
						email: email,
						address: address,
						city: city,
						country: country,
						password: password
					})
				})
					.then(resp => resp.json())
					.then(response => {
						setStore({ create_user: response.message });
					})
					.then(() => history.push("/registration/confirmation"));
			},
			login: (email, password) => {
				let store = getStore();
				fetch(apiHost + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(resp => resp.json())
					.then(response => {
						setStore({ token: response.jwt });
					});
			}
		}
	};
};

export default getState;
