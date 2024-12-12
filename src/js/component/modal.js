import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

import "../../styles/demo.css";
// import { ids } from "webpack";

export const ModalConfirm = () => {
    const { store, actions } = useContext(Context);
    const { mostrar, setMostrar } = useContext(Context);
    
   
    return (
        <div className="modal" id="confirmacion" tabindex="-1" style={{display:none}}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure to ddelete?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setMostrar("none")}>Close</button>
                    <button type="button" className="btn btn-primary">Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
};
