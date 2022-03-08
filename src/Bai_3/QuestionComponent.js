import React, { Component } from "react";

const QuestionComponent = (props) => {

    const { onSelect, quizData, loadQuestion, selectedQuestion } = props;

    

    return (
        <form style = {{display:"flex", flexDirection:"column", alignContent:"space-between", height: "100%"}}>
            <div style = {{padding: "20px",flexGrow:"1"}}>
                <div className = "questionContainer" style = {{padding:"40px", fontSize: "24px", fontWeight:"bold"}}>{selectedQuestion.question}</div>
                <div className = "answerContainer">
                <ul style ={{textAlign:"left", listStyle:"none"}}>
                    <li style = {{fontSize:"20px",marginBottom:"12px"}}>
                        <input id = "a" type = "radio" name = "answer" value = {selectedQuestion.a} onChange={onSelect}></input>
                        <label htmlFor = "a">{selectedQuestion.a}</label>
                    </li>
                    <li style = {{fontSize:"20px",marginBottom:"12px"}}>
                        <input id = "b" type = "radio" name = "answer" value = {selectedQuestion.b} onChange={onSelect}></input>   
                        <label htmlFor = "b">{selectedQuestion.b}</label>
                    </li>
                    <li style = {{fontSize:"20px",marginBottom:"12px"}}>
                        <input id = "c" type = "radio" name = "answer" value = {selectedQuestion.c} onChange={onSelect}></input>   
                        <label htmlFor = "c">{selectedQuestion.c}</label>
                    </li>
                    <li style = {{fontSize:"20px"}}>
                        <input id = "d" type = "radio" name = "answer" value = {selectedQuestion.d} onChange={onSelect}></input>   
                        <label htmlFor = "d">{selectedQuestion.d}</label> 
                    </li>
                </ul>
                </div>
            </div>
            <button style = {{backgroundColor: "purple", width: "100%", padding: "20px", fontSize: "20px", color:"white", cursor: "pointer", outline: "none"}} type = "submit" onClick={loadQuestion}> Submit </button>
        </form>
        

    )
}

export default QuestionComponent
