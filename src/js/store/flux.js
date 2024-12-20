const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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
			createContact: async (name, email, phone, address) => {
				console.log(name, email, phone, address);
				
				try {
					let response = await fetch('https://playground.4geeks.com/contact/agendas/crodriguez/contacts', {
						method: "POST",
						body: JSON.stringify({
							name: name,
							phone: email,
							email: phone,
							address: address
						  }),
						headers: {
							"Content-Type": "application/json"
				  		}
					});
					console.log(response);

					let data = await response.json()
					setStore({contacts:data.contacts});
					console.log(data);
					return true
				} catch (error) {
					console.log(error);
					return false
				}
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
