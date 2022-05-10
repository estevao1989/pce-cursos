import React from 'react'
import logo from '../assets/images/logopce.png'
import './Logo.css'

export default props => {
    return (
        <a className="logo" href="/">
            <img src={logo} alt="logo-pce" />
            <span className="titulo">PCE</span>
        </a>
    )
}