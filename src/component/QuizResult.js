import React from 'react'

const QuizResult = (props) => {
  return (
    <div className='score-question'>
        <h2>Completed!</h2>
        <h4>Total Score {props.score}/{props.LengQuestions*5}</h4>
        <h4>Your Correct Question {props.CorrectAns} out of {props.LengQuestions}.</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult