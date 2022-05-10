import React from "react";
import './Answer.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'


export default ({ question, dataTable }) => {

    function AdminButtons() {

        function answerQuestion() {
            console.log('click');
        }

        function deleteQuestion(e){
            e.preventDefault()

        }


        if (userdata.userLevel < 2) {
            return (
                <div className="admin-options">
                    <div>
                        <BsChevronCompactDown className="admin-options-respond" onClick={(e)=> answerQuestion(e)}></BsChevronCompactDown>
                    </div>
                    <div>
                        <BiTrash className="admin-options-exclude"></BiTrash>
                    </div>
                </div>
            )
        }
        return <></>
    }
    console.log('loop Answer');
    const userdata = JSON.parse(localStorage.getItem('isLoggedIn'))

    if (question !== [] || question == undefined) {
        return (
            <div className="answer">
                <div className="comment">
                    <div className="student-name">{question.studentName} perguntou : </div>
                    <div className="question">{question.ask}</div>
                </div>
                <AdminButtons></AdminButtons>
            </div>
        )

    } else {
        return <></>

    }
}