import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Contact from "../component/Contact";
import { AiOutlineEdit, AiFillAlert } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container ">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => navigate("/FormularioContact")}
          className="btn btn-success "
        >
          Añadir nuevo contacto
        </button>
      </div>

      <ul className="list-group">
        {store.contacts.length > 0 ? (
          <>
            {store.contacts.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <button
                  className="btn btn-dark"
                  onClick={() => navigate("/single/" + index)}
                >
                  Ver info del contacto
                </button>

                <Contact item={item} />

                <AiOutlineEdit onClick={() => console.log("Editando..")} />
                <RiDeleteBin2Fill
                  onClick={() => actions.deleteContact(index)}
                />
              </li>
            ))}
          </>
        ) : (
          <div className="d-flex justify-content-around  m-5 border border-danger rounded py-3 ">
            <h1>
              <AiFillAlert /> No tienes contactos...
            </h1>
          </div>
        )}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Volver a Inicio</button>
      </Link>
    </div>
  );
};
