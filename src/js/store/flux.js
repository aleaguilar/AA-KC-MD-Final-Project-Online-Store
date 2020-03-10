const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: "",
			create_user: "",
			token: ""
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			createContact: email => {
				fetch("https://3000-b584752f-7982-4bf0-83ee-68da25c07f9f.ws-us02.gitpod.io/subscribe", {
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
			createUser: (name, lastname, email, address, city, country, password) => {
				let store = getStore();
				fetch("https://3000-b584752f-7982-4bf0-83ee-68da25c07f9f.ws-us02.gitpod.io/register", {
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
						// console.log(store.create_user);
					});
			},
			login: (email, password) => {
				let store = getStore();
				fetch("https://3000-b584752f-7982-4bf0-83ee-68da25c07f9f.ws-us02.gitpod.io/login", {
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
