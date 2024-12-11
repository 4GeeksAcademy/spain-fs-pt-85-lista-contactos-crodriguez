import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const NuevoContacto = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

	// setName("");
    // setPhone("");
    // setEmail(""),
    // setAddress("");

	

	function handleContact(event) {
		event.preventDefault()
		actions.createContact(name, email, phone, address)
		// console.log(name);
		// console.log(phone);
		// console.log(address);
		// console.log(email);
	  }
	
	return (
		<div className="container-fluid mt-5">
			<h1 className="text-center mb-4">Add a new contact</h1>
			<form onSubmit={handleContact}>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" onChange={(event) => setName(event.target.value)} 
                value={name}  />
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} 
                value={email}/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone" onChange={(event) => setPhone(event.target.value)} 
                value={phone} />
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter address" onChange={(event) => setAddress(event.target.value)} 
                value={address}/>
			</div>
			<div className="d-grid gap-2">
    			<button className="btn btn-primary" type="submit">Save</button>
  			</div>
			</form>
			<a href="/">or get back to contacts</a>
		</div>
	);
};
