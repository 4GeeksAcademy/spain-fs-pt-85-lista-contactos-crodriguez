import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const NuevoContacto = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid mt-5">
			<h1 className="text-center mb-4">Add a new contact</h1>
			<div className="mb-3">
				<label for="formGroupExampleInput" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Email</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Phone</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Address</label>
				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter address" />
			</div>
			<div className="d-grid gap-2">
    			<button class="btn btn-primary" type="submit">Save</button>
  			</div>
			<a href="/">or get back to contacts</a>
		</div>
	);
};
