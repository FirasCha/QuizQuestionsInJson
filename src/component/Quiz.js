import React from 'react'
import "./quiz.css"

const Quiz = () => {
  return (
    <>
        <div className='app'>
            <div className='question-section'>
                <h5> Score</h5>
                <div className='question-count'>
                    <span>Question 1 of 4</span>
                </div>
                <div className='question-text'>
                    Question 1
                </div>
            </div>
            <div className='answer-section'>
                <button>Answers</button>
            </div>
            <div className='actions'>
                <button>Quit</button>
                <button>Next</button>
            </div>
        </div>
    </>
  )
}

export default Quiz