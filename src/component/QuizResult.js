import React, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

const QuizResult = (props) => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    <div className='score-question'>
      {
        loading?
        <BeatLoader
        speedMultiplier={1}
        color={'#7cc6fe'}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>
        <h2>Completed!</h2>
        <h4>Total Score {props.score}/{props.LengQuestions*5}</h4>
        <h4>Your Correct Question {props.CorrectAns} out of {props.LengQuestions}.</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
      </div>
      }
    </div>
  )
}

export default QuizResult