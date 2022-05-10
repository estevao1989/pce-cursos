import React, {useState, useEffect} from "react";
import Answer from "./Answer";
import axios from "axios";

export default ({ curso, visible }) => {

    const [questions, setQuestions] = useState([])

    const dataTable = curso.replace(/ /g,"_").replace(/-/g,"").trim()

    useEffect(() => {
        axios.get('http://localhost:3001/questions', {
            params: {
                dataTable
            }
        }).then(response => {
            if(response.data.errno){
                console.log(response.data.errno);
                console.log(response.data.code);
                return
            }else{
                setQuestions(response.data)
            }
        })
    }, [visible])

    if (questions !== [] || questions == undefined) {
        const Allquestions = questions.map(question => {
            return (
                <Answer question = {question} key={question.askId} dataTable={dataTable}></Answer>
            )
        })
        return Allquestions
    } else {
        return (
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )

    }
}