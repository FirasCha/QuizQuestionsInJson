import React from 'react'
import "./quiz.css"
import {Link} from "react-router-dom";

const MenuOfQuiz = () => {
  return (
    <>
        <div className='app'>
            
                <>
                <div className='question-section'>
                        <h5> Score : </h5>
                        <div className='question-count'>
                            <span>Question </span>
                        </div>
                        <div className='question-text'>       
                        </div>
                    </div>
                    <div className='answer-section'>
                        <button to="/Quiz">Kids Quiz</button>
                        <Link to="/Quiz" >Kids Quiz</Link>
                    </div>
                </>
                   
        </div>
    </>
  )
}

export default MenuOfQuiz