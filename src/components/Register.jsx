import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Main from './Main'
import axios from 'axios'
import './Register.css'

export default props => {

    const [nome, setNome] = useState("")
    const [contacto, setContacto] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const history = useHistory()

    function newRegister(e) {
        e.preventDefault()
        const nomeuser= localStorage.setItem('user', nome)
        axios.post('http://localhost:3001/register', {
            nome: nome,
            contacto: contacto,
            email: email,
            pass: pass
        }).then(response => {
            alert(`Um registro com o nome ${localStorage.getItem('user')} foi efetuado com sucesso`)
            localStorage.clear()
            history.push('/')

        })

    }
    return (
        <Main>
            <form className="form-register d-flex justify-content-center ">
                <div className="register-comercial">
                </div>
                <div className="register-login">
                    <div className="grid-register">
                        <div className="infos-register">
                            <h3>Bem vindo!</h3>
                            <h5>De graça recebemos e de graça damos!</h5>
                        </div>
                    </div>
                    <div className="register-area">
                        <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control m-2" id="nome" name="nome" value={nome} placeholder="Nome" required />
                        <input onChange={(e) => setContacto(e.target.value)} type="text" className="form-control m-2" id="contacto" name="contacto" placeholder="Contacto" value={contacto} required />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control m-2" id="email" name="email" value={email} placeholder="Email" required />
                        <input onChange={(e) => setPass(e.target.value)} type="password" className="form-control m-2" id="senha" name="senha" value={pass} placeholder="senha" required />
                    </div>
                    <div className="register-button">
                        <button onClick={(e) => newRegister(e)} type="submit" className="button button-gray">Registar</button>
                    </div>
                </div>
            </form>
        </Main>
    )
}