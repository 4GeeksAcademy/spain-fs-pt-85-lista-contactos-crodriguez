import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from 'prop-types';


import "../../styles/demo.css";

export const CardContact = (props) => {
	const { store, actions } = useContext(Context);
    console.log(store);
    
    useEffect(()=>{
        actions.getContacts()
    },[])
    return (
		<div className="card border-light mb-3 w-100">
            <div className="row g-0">
                <div className="col-2">
                    <img src="" className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">{props.email}</p>
                    
                    </div>
                </div>
                <div className="col-2">
                    <i></i>
                    <i></i>
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
};