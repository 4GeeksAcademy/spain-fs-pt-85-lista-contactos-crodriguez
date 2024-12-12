import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { CardContact } from "../component/cardContact";
import { ModalConfirm } from "../component/modal";


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	
	useEffect(()=>{
        actions.createUser()
    },[])
	// useEffect(()=>{
    //     actions.getContacts()
    // },[])
	
	return (
		<div className="container-fluid mt-5">
			<div className="d-flex justify-content-end mb-4">
				<a className="btn btn-success" href="/new-contact" role="button">Añadir contacto</a>
			</div>
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<div
							key={index}
							className="list-group-item d-flex justify-content-between">
								<CardContact  name={item.name} email={item.email} phone={item.phone} address={item.address}	/>
						</div>
					);
				})}
			</ul>
			
		</div>
	);
};

