import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { VideoContext } from "../data/DataContext";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Buttons.css";

export function Login() {
  return (
    <Link to="/login">
      <button className="button button-red ">Login</button>
    </Link>
  );
}

export function Register() {
  const history = useHistory();

  return (
    <Link to="/register">
      <button className="button button-gray">Registar</button>
    </Link>
  );
}

export function LogOut() {
  const history = useHistory();
  let location = useLocation();
  const { setIsLoggedIn } = useContext(VideoContext);

  function logout() {
    localStorage.clear();
    setIsLoggedIn(null);
    history.push("/");
  }

  return (
    <button className="button button-yellow" onClick={() => logout()}>
      Sair
    </button>
  );
}
