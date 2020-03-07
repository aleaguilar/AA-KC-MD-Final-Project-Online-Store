const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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
			} //, logInModal: () => {};
		}
	};
};

export default getState;
