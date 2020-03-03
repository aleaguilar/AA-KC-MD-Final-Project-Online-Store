const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
				return fetch("https://libertyexpress.api-us1.com/api/3/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Api-Token": process.env.KEY
					},
					body: JSON.stringify({
						contact: {
							email: email
						}
					})
				}).then(response => {
					if (response.status >= 200 && response.status < 400) {
						return response.json();
					} else {
						throw Error("Invalid request");
					}
				});
			}
		}
	};
};

export default getState;
