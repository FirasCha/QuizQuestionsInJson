import React, { useEffect, useState } from 'react'
import "./quiz.css"
import historical_questions from './HistoricDataQuiz'
import QuizResult from './QuizResult'
import { Link } from 'react-router-dom'
import ClockLoader from 'react-spinners/ClockLoader'

const HistoricalQuiz = () => {

    const LengQuestions = historical_questions.length
    const [ currentQuestion, setCurrentQuestion] = useState(0)
    const [ score, setScore] = useState(0)
    const [ CorrectAns, setCorrectAns] = useState(0)
    const [ showResult, setShowResult] = useState(false)
    const [ clicked, setClicked] = useState(false)
    
    const handleNextOptions = ()=>{
        setClicked(false)
        const nextQuestion = currentQuestion+1
        if(nextQuestion < historical_questions.length){
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
    const [loading, setLoading] = useState(false)
        useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
        setLoading(false)
    },4000)
    },[])
  return (
    <>
        <div className='app'>
            {
                loading?
                <ClockLoader
                speedMultiplier={1}
                color={'#7cc6fe'}
                loading={loading}
                size={250}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            :
            (
                showResult?(

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
                            <span>Question {currentQuestion+1} of {historical_questions.length}</span>
                        </div>
                        <div className='question-text'>
                            {historical_questions[currentQuestion].questionText}
                        </div>
                        <div className='question-text'>
                            
                        </div>
                    </div>
                    <div className='answer-section'>
                        {historical_questions[currentQuestion].answerOption.map((ans, i) => {
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
                ))}    
        </div>
    </>
  )
}

export default HistoricalQuiz