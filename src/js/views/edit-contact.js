import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditarContacto = () => {
    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { id } = useParams(); 

    useEffect(() => {
        const contactToEdit = store.contacts.find((contact) => contact.id === parseInt(id));
        if (contactToEdit) {
            setName(contactToEdit.name);
            setEmail(contactToEdit.email);
            setPhone(contactToEdit.phone);
            setAddress(contactToEdit.address);
        }
    }, [store.contacts, id]);    

    const handleEdit = async (event) => {
        event.preventDefault();
        const contact = {
            name: name,
            email: email,
            phone: phone,
            address: address,
        };
        const edited = await actions.editContact(id, contact);
        if (edited) {
            navigate("/");
        }
    };
    
    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center mb-4">Edit contact</h1>
            <form onSubmit={handleEdit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" onChange={(event) => setName(event.target.value)} value={name}/>
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
