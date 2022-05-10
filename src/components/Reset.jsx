import React, { useState } from "react";
import { useHistory } from "react-router"; 
import Main from "./Main";
import { Link } from "react-router-dom";

function Reset(props) {

    const history = useHistory();
    const [user, setUser] = useState("");

    function recover(e){
        e.preventDefault()
        if(user == ""){
            alert('PREENCHA O COM O SEU EMAIL')
        } else{
            alert('FOI-TE ENVIADO UM EMAIL, VERIFICA POR FAVOR!')
        }
    }
    return (
        <Main>
            <form className="form-user d-flex justify-content-center ">
                <div className="comercial">
                </div>
                <div className="login-login">
                    <div className="grid-login">
                        <div className="infos">
                            <h3>NÃO SE PREOCUPE!</h3>
                            <h5>Em poucos segundos terás  o teu acesso!</h5>
                            <h6>Preencha o campo com o email cadastrado</h6>
                        </div>
                        <div className="user-area">
                            <label htmlFor="nome">Email</label>
                            <input onChange={(e) => setUser(e.target.value)} type="text" className="form-control" id="user" name="user" value={user} required />
                        </div>
                        <div className="login-button">
                            <button onClick={(e) => recover(e)} type="submit" className="button button-gray">RECUPERAR</button>
                        </div>
                    </div>
                </div>
            </form>
        </Main>
    )
}
export default Reset