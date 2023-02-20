import React, { useState } from 'react'
import "./quiz.css"
import football_questions from './FootballDataQuiz'
import QuizResult from './QuizResult'
import { Link } from 'react-router-dom'

const FootballQuiz = () => {
    
    const LengQuestions = football_questions.length
    const [ currentQuestion, setCurrentQuestion] = useState(0)
    const [ score, setScore] = useState(0)
    const [ CorrectAns, setCorrectAns] = useState(0)
    const [ showResult, setShowResult] = useState(false)
    const [ clicked, setClicked] = useState(false)
    
    const handleNextOptions = ()=>{
        setClicked(false)
        const nextQuestion = currentQuestion+1
        if(nextQuestion < football_questions.length){
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
                            <span>Question {currentQuestion+1} of {football_questions.length}</span>
                        </div>
                        <div className='question-text'>
                            {football_questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className='answer-section'>
                        {football_questions[currentQuestion].answerOption.map((ans, i) => {
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
                            {/* <button onClick={handlePlayAgain}>Quit</button> */}
                            {/* <button onClick={handlePrevOptions}>Previous</button> */}
                            <Link className="link" to="/">Menu</Link>
                            <button disabled={!clicked} onClick={handleNextOptions}>Next</button>
                        </div>
                    </div>
                </>
                )}    
        </div>
    </>
  )
}

export default FootballQuiz