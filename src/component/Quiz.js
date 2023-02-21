import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./quiz.css"
import questions from './QuizData'
import QuizResult from './QuizResult'
import { SlControlForward } from "react-icons/sl";
import { VscDebugRestart } from "react-icons/vsc";

const Quiz = () => {

    const LengQuestions = questions.length
    const [ currentQuestion, setCurrentQuestion] = useState(0)
    const [ score, setScore] = useState(0)
    const [ CorrectAns, setCorrectAns] = useState(0)
    const [ showResult, setShowResult] = useState(false)
    const [ clicked, setClicked] = useState(false)
    const handleNextOptions = ()=>{
        setClicked(false)
        const nextQuestion = currentQuestion+1
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowResult(true)
        }    
    }
    const handleAnswerOption = (isCorrect)=>{
        if(isCorrect){
            setScore(score+5)
            setCorrectAns(CorrectAns+1)
        }
        setClicked(true)
    }
    const handlePrevOptions = ()=>{
        const prevQuestion = currentQuestion-1
        setCurrentQuestion(prevQuestion)
    }
    const handlePlayAgain= ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    }
  return (
    <>
        <div className='app'>
            {showResult?(

                <QuizResult 
                    score={score} 
                    CorrectAns={CorrectAns} 
                    handlePlayAgain={handlePlayAgain}
                    LengQuestions={LengQuestions}
                />

            ) : (
                <>
                <div className='question-section'>
                        <h5> Score : {score}</h5>
                        <div className='question-count'>
                            <span>Question {currentQuestion+1} of {questions.length}</span>
                        </div>
                        <div className='question-text'>
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOption.map((ans, i) => {
                            return (
                            <button className={`button ${clicked & ans.isCorrect? "correct":"button"}`}
                            disabled={clicked}
                            key={i} 
                            onClick={()=>handleAnswerOption(ans.isCorrect)}
                            >
                                {ans.answerText}
                            </button>
                            )
                        })}
                        <div className='actions'>
                            <Link className="link" to="/" >Menu</Link>
                            <button onClick={handlePlayAgain}><VscDebugRestart/></button>
                            {/* <button onClick={handlePrevOptions}>Previous</button> */}
                            <button disabled={!clicked} onClick={handleNextOptions}><SlControlForward/></button>
                        </div>
                    </div>
                </>
                )}    
        </div>
    </>
  )
}

export default Quiz