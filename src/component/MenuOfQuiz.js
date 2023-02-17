import React from 'react'
import "./quiz.css"
import {Link} from "react-router-dom";

const MenuOfQuiz = () => {
  return (
    <>
        <div className='app'>
            
                <>
                    
                    <div className='answer-section'>
                        <h5 style={{textAlign:'center'}}>Menu Quiz</h5>
                        <Link className="link" to="/Quiz" >Kids Quiz</Link>
                        <Link className="link" to="/HistoricalQuiz" >Historical Quiz</Link>
                        {/* <Link className="link" to="/Quiz" >Kids Quiz</Link>
                        <Link className="link" to="/Quiz" >Kids Quiz</Link>
                        <Link className="link" to="/Quiz" >Kids Quiz</Link> */}
                        <Link className="link" to="/" >Menu</Link>
                    </div>
                </>
                   
        </div>
    </>
  )
}

export default MenuOfQuiz