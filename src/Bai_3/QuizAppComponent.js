import React, { Component } from "react";
import QuestionComponent from "./QuestionComponent";
import ResultComponent from "./ResultComponent";

let questionScore = 1;
let questionIndex = 1;
class QuizAppComponent extends Component {
  state = {
    quizData: [
      {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
      },
      {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
      },
      {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
      },
    ],
    selectedQuestion: {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "Javascript",
      correct: "d",
      selectedAnswer: false,
    },
    selectedAnswer: false,
    rightAnswers: 0,
  };

  onSelect = (event) => {
    if(event.target.id === this.state.selectedQuestion.correct) {
      this.setState({
        selectedAnswer: true
      })
    }
    else {
      this.setState({
        selectedAnswer: false
      })
    }
  } 

  loadQuestion = (event) => {
    event.preventDefault();
    console.log(questionScore);
    if(this.state.selectedAnswer) {
      questionScore++;
    }
    this.setState({
        selectedAnswer: false,
        selectedQuestion: this.state.quizData[questionIndex]
    },
    () => {
        if((questionIndex-1 < this.state.quizData.length)) {
          questionIndex++;
        }
        else {
            console.log("finished ---"+ questionScore + "/4")
            return(
                <ResultComponent/>
            ) 
        }
    }) 
  }



  onSubmit = (event) => {

  }

  render() {
    const { quizData, selectedQuestion } = this.state

    return (
      <div style ={{width: "100%", height: "100vh", margin: "0", backgroundColor: "#F0F8FF"}}>
        <div
          style={{
            width: "600px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "white"
          }}
        >
            <QuestionComponent
                quizData = { quizData }
                onSelect = { this.onSelect }
                loadQuestion = { this.loadQuestion }
                selectedQuestion = { selectedQuestion }
            />
        </div>
      </div>
    );
  }
}

export default QuizAppComponent;
