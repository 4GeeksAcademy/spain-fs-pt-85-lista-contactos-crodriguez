import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { CardContact } from "../component/cardContact";
import { ModalConfirm } from "../component/modal";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [mostrar, setMostrar] = useState({id:null, stateModal:false});
	const [contactId, setContactId] = useState(null); 


	console.log(store);
	console.log(mostrar)


	useEffect(()=>{
        actions.createUser()
		actions.getContacts()
    },[])

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
								<CardContact id={item.id} name={item.name} email={item.email} phone={item.phone} address={item.address}	setMostrar={setMostrar}/>
						</div>
					);
				})}
			</ul>
			<ModalConfirm mostrar={mostrar.stateModal} setMostrar={setMostrar} id={mostrar.id} />
		</div>
	);
};

