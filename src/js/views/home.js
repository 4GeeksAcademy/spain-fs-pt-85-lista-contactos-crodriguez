import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { CardContact } from "../component/cardContact";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	
	useEffect(()=>{
        actions.createUser()
    },[])
	
	return (
		<div className="container-fluid mt-5">
			<div className="d-flex justify-content-end mb-4">
				<a className="btn btn-success" href="/new-contact" role="button">Añadir contacto</a>
			</div>
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
								<CardContact />
							{/* <Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link> */}
							{/* {// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null} */}
							{/* <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button> */}
						</li>
					);
				})}
			</ul>
			
		</div>
	);
};
