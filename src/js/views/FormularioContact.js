import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import BotonInfo from "../component/BotonInfo";

const FormularioContact = () => {
  const { actions } = useContext(Context);
  const [error, setError] = useState(false);
  const [confirmacionEnvio, setConfirmacionEnvio] = useState(false);
  const [newContact, setNewContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        newContact.fullname,
        newContact.email,
        newContact.phone,
        newContact.address,
      ].includes("")
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      actions.addContact(newContact);
      setConfirmacionEnvio(true);
      setNewContact({ fullname: "", email: "", phone: "", address: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <h1 clase="text-center">Add a new contact</h1>
        {error && (
          <BotonInfo
            clase="btn-danger"
            texto="Todos los campos son obligatorios"
          />
        )}
        {confirmacionEnvio && (
          <BotonInfo clase="btn-success" texto="Agregado correctamente" />
        )}

        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={newContact.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={newContact.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>
        <Link to="/demo">
          <button className="btn btn-success mt-3">
            Volver al listado de contactos
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FormularioContact;
