import React, { useState, useContext } from "react";
import Main from "./Main";
import { useHistory } from "react-router";
import { VideoContext } from "../data/DataContext";
import axios from "axios";
import './Login.css'
import { Link } from 'react-router-dom'

export default (props) => {
  const { setIsLoggedIn, isLoggedIn } = useContext(VideoContext);

  const history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function login(e) {
    e.preventDefault();
    axios
      .get("http://localhost:3001/login", {
        params: {
          user: user,
          pass: pass,
        },
      })
      .then(response => {
        if (response.data == undefined) {
          alert("USUÁRIO OU SENHA INCORRETOS");
        } else {
          //localStorage stores key value pairs as strings only, that's why we use JSON.stringfy()
          localStorage.setItem(
            "isLoggedIn", JSON.stringify({
              "id": response.data[0].id,
              "name": response.data[0].name,
              "contact": response.data[0].contact,
              "email": response.data[0].email,
              "userLevel": response.data[0].userLevel,
            })
          );
          setIsLoggedIn(response.data[0]);
          history.push("/");
        }
      })
  }

  return (
    <Main>
      <form className="form-user d-flex justify-content-center ">
        <div className="comercial">
        </div>
        <div className="login-login">
          <div className="grid-login">
            <div className="infos">
              <h3>Bem vindo!</h3>
              <h5>De graça recebemos e de graça damos!</h5>
            </div>
            <div className="user-area">
              <label htmlFor="nome">Usuário</label>
              <input onChange={(e) => setUser(e.target.value)} type="text" className="form-control" id="user" name="user" value={user} required />
              <label htmlFor="pass">Senha</label>
              <input onChange={(e) => setPass(e.target.value)} type="password" className="form-control" id="pass" name="pass" value={pass} required />
            </div>
            <div className="login-button">
              <button onClick={(e) => login(e)} type="submit" className="button button-red">Login</button>
              <Link to="/reset" className="reset"> Esqueci minha senha</Link>
            </div>
          </div>
        </div>
      </form>
    </Main>
  );
};
