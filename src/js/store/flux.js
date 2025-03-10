const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			createUser: async () => {
				try {
					let response = await fetch('https://playground.4geeks.com/contact/agendas/crodriguez', {
						method: "POST"
					});
					console.log(response);
					
					return (true)
				} catch (error) {
					console.log(error);
					return (false)
				}
			},
			getContacts: async () => {
				try {
					let response = await fetch('https://playground.4geeks.com/contact/agendas/crodriguez', {
						method: "GET"
					});
					let data = await response.json()
					setStore({contacts:data.contacts});
					console.log(data);
					return true
				} catch (error) {
					console.log(error);
					return false
				}
			},
			createContact: (name, email, phone, address) => {
				console.log(name, email, phone, address);
			
				return new Promise(async (resolve, reject) => {
					try {
						let response = await fetch('https://playground.4geeks.com/contact/agendas/crodriguez/contacts', {
							method: "POST",
							body: JSON.stringify({
								name: name,
								phone: phone,
								email: email,
								address: address
							}),
							headers: {
								"Content-Type": "application/json"
							}
						});
			
						console.log(response);
			
						if (!response.ok) {
							reject(new Error(`HTTP error! status: ${response.status}`));
							return;
						}
			
						let data = await response.json();
						setStore({ contacts: data.contacts });
						console.log(data);
						resolve(true);
					} catch (error) {
						console.log(error);
						reject(error);
					}
				});
			},
			deleteContact: async (id) => {
                try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/crodriguez/contacts/${id}`, {
                    method: "DELETE",
                })

				const contacts = getStore().contacts.filter(contact => contact.id !== id);
        		setStore({ contacts });

				return true;
				} catch (error) {
					console.log(error);
					return false
				}
            },
            editContact: async (id, contact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/crodriguez/contacts/${id}`, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
			
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
			
					const data = await response.json();
					console.log("Contacto editado:", data);
			
					// Actualiza el store después de editar el contacto
					await getActions().getContacts();
			
					return true;
				} catch (error) {
					console.error("Error al editar el contacto:", error);
					return false;
				}
			},

			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

				//reset the global store
				setStore({ contacts: contacts }){}	
		}
	}
		
}

export default getState;
