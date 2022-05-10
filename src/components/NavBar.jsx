import React, { useContext } from "react";
import "./NavBar.css";
import Logo from "./Logo";
import UserData from "./UserData";
import { Link } from "react-router-dom";

const logo = "../assets/images/logopce.png";

export default (props) => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="navbar-brand">
          <Logo image={logo}></Logo>
        </Link>
        <Link to="/" className="titulo-PCE">
          <span>| PLATAFORMA DE CRESCIMENTO ESPIRITUAL</span>
        </Link>
      </nav>
      <UserData />
    </header>
  );
};
