import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { Images } from "../../utils/images.js";
import { NavDropdown } from 'react-bootstrap';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        <img src={Images.Logo} alt="Logo store" />
      </Link>
      <div className="icon navbar-nav ">
        <li>
          <Link className="nav-link" to="/cart">
            <CartIcon />
          </Link>
        </li>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Inicio <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Productos"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/categories/mixto">Mixto</NavDropdown.Item>
              <NavDropdown.Item href="/categories/mujer">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="/categories/hombre">Hombre</NavDropdown.Item>
          </NavDropdown>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
