import React from "react";
import { Link } from "react-router-dom";
import { LuGithub } from "react-icons/lu";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 ">
      <div class="container-fluid">
        <p class="navbar-brand"></p>
        <a href="" className="nav-brand"></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Project Contact List App Using React & Context
            </a>
          </li>
        </ul>
        <span class="navbar-text text-white">Ir al repositorio</span>
        <a
          class="nav-link text-white"
          aria-current="page"
          href="https://github.com/vtorresvcf/vtorres_ListaContactosReact-Context.git"
        >
          <LuGithub />
        </a>
      </div>
    </nav>
  );
};
