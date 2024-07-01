import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import BotonInfo from "../component/BotonInfo";

const EditFormulario = () => {
  const { actions, store } = useContext(Context);
  const [error, setError] = useState(false);
  const [confirmacionEnvio, setConfirmacionEnvio] = useState(false);

  const [newContact, setNewContact] = useState({
    name: store.edit?.name,
    email: store.edit?.email,
    phone: store.edit?.address,
    address: store.edit?.phone,
  });
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        newContact.name,
        newContact.email,
        newContact.phone,
        newContact.address,
      ].includes("")
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      actions.editContact(newContact, store.edit?.id);
      setConfirmacionEnvio(true);
      setNewContact({ name: "", email: "", phone: "", address: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <h1 className="text-center pb-3">
          Modificar contacto <hr />
        </h1>

        {error && (
          <BotonInfo
            clase="btn-danger"
            texto="Todos los campos son obligatorios"
          />
        )}
        {confirmacionEnvio && (
          <BotonInfo clase="btn-success" texto="Modificado correctamente" />
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre y apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newContact.name}
            onChange={handleChange}
            placeholder="Nombre y apellidos"
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
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
            placeholder="Teléfono"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={newContact.address}
            onChange={handleChange}
            placeholder="Dirección"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 ">
          Modificar
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
export default EditFormulario;
