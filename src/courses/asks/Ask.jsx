import React, { useState, useEffect } from "react";
import axios from "axios";
import './Ask.css'

export default ({curso, setVisible, visible}) => {


    const chars = 250
    const [control, setControl] = useState(250)
    const [ask, setAsk] = useState("")
    const [classNumber, setClassNumber] = useState()
    const userdata = JSON.parse(localStorage.getItem('isLoggedIn'))

    function count(e) {
        setAsk(e.target.value)
        setControl(chars - e.target.value.length)
    }
    function postQuestion(e){
        e.preventDefault()
        setVisible(!visible)
        const dataTable = curso.replace(/ /g,"_").replace(/-/g,"").trim()
        axios.post('http://localhost:3001/postNewQuestion', {
            ask,
            classNumber,
            dataTable: dataTable, 
            studentId : userdata.id,
            studentName: userdata.name
        })
    }

    return (
        <div className="ask">
            <label htmlFor="pergunta" className="m-2"> Pergunta: </label>
            <div className="input-group">
                <input type="text" class="form-control" onChange={(e) => count(e)}></input>
                <div className="input-group-append">
                    <span className="input-group-text">{control}</span>
                </div>
            </div>
            <div className="aula m-2">
                <div className="aula-2">
                    <label htmlFor="pergunta"> Relacionado a aula nº :</label>
                    <input type="text" class="form-control" onChange={(e) => setClassNumber(e.target.value)}></input>
                </div>
                <button onClick={(e) => postQuestion(e)}> Fazer Pergunta</button>
            </div>
        </div>
    )
}