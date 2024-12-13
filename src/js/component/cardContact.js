import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import ModalConfirm from "./modal";

import "../../styles/demo.css";

export const CardContact = ({ id, name, email, phone, address, setMostrar }) => {
	const { store, actions } = useContext(Context);
    console.log(store);
    
    useEffect(()=>{
        actions.getContacts()
    },[])

    
    return (
		<div className="card border-light mb-3 w-100">
            <div className="row g-0">
                <div className="col-2">
                    <img src="https://cdn.idealo.com/folder/Product/6168/0/6168085/s11_produktbild_gross/hasbro-star-wars-darth-vader-helmet.jpg" className="img-fluid rounded-start my-3" alt="" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot me-2"></i>{address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone-flip me-2"></i>{phone}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope me-2"></i>{email}</p>
                    </div>
                </div>
                <div className="col-2 d-flex flex-row-reverse">
                    <i className="fa-solid fa-pen p-2"></i>
                    <i className="fa-solid fa-trash p-2" data-bs-target="#confirmacion" onClick={()=>setMostrar(id)}></i>
                </div>
            </div>
        </div>
	);
};

CardContact.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    setMostrar: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};