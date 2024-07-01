import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = () => {
  const { store } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron border w-50 mx-auto p-4 ">
      <h1 className="display-4 my-3 text-center">Datos del contacto</h1>
      <hr className="my-4" />
      <p>Nombre y apellidos: {store.contacts[params.theid].fullname}</p>
      <p>Teléfono: {store.contacts[params.theid].phone}</p>
      <p>Email: {store.contacts[params.theid].email}</p>
      <p>Dirección: {store.contacts[params.theid].address}</p>

      <hr className="my-4" />

      <Link to="/listcontacts">
        <span className="btn btn-dark w-100 " href="#" role="button">
          Volver a la lista de contactos
        </span>
      </Link>
    </div>
  );
};

ContactCard.propTypes = {
  match: PropTypes.object,
};
