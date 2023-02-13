import React, { useState } from 'react'
import "./quiz.css"
import questions from './QuizData'
const Quiz = () => {
    const [ currentQuestion, setCurrentQuestion] = useState(0)
    const handleNextOptions = ()=>{
        const nextQuestion = currentQuestion+1
        setCurrentQuestion(nextQuestion)
    }
    const handlePrevOptions = ()=>{
        const prevQuestion = currentQuestion-1
        setCurrentQuestion(prevQuestion)
    }
  return (
    <>
        <div className='app'>
            <div className='question-section'>
                <h5> Score</h5>
                <div className='question-count'>
                    <span>Question {currentQuestion+1} of {questions.length}</span>
                </div>
                <div className='question-text'>
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOption.map((ans, i) => {
                    return <button key={i}>{ans.answerText}</button>
                })}
                <div className='actions'>
                    <button>Quit</button>
                    {/* <button onClick={handlePrevOptions}>Previous</button> */}
                    <button onClick={handleNextOptions}>Next</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Quiz