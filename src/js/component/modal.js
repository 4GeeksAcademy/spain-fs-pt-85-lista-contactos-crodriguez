import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

import "../../styles/demo.css";
// import { ids } from "webpack";

export const ModalConfirm = ({ id, mostrar, setMostrar }) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        if (id && id !== 0) {
            actions.deleteContact(id);
            setMostrar(false); 
        }
    }

    const handleClose = () => {
        setMostrar(false); 
    };

    return (
        <div className={`modal ${mostrar ? "show" : "d-none"}`} id="confirmacion" tabIndex="-1" style={{ display: mostrar ? "block" : "none" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ModalConfirm.propTypes = {
    mostrar: PropTypes.bool.isRequired,
    setMostrar: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    deleteContact: PropTypes.func,
};