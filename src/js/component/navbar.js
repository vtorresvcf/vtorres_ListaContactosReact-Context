import React from "react";
import { Link } from "react-router-dom";
import { LuGithub } from "react-icons/lu";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 ">
      <div className="container-fluid">
        <p className="navbar-brand"></p>
        <a href="" className="nav-brand"></a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Project Contact List App Using React & Context
            </a>
          </li>
        </ul>
        <span className="navbar-text text-white">Ver repositorio en </span>
        <a
          className="nav-link text-white"
          aria-current="page"
          href="https://github.com/vtorresvcf/vtorres_ListaContactosReact-Context.git"
        >
          <div className="border border-white rounded-circle p-1">
            <LuGithub />
          </div>
        </a>
      </div>
    </nav>
  );
};
