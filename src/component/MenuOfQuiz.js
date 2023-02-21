import React, { useState, useEffect } from 'react'
import "./quiz.css"
import {Link} from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { MdOutlineMenuBook,MdHistoryEdu } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';
import { ImEarth } from 'react-icons/im';
import { TbMoodBoy } from 'react-icons/tb';
const MenuOfQuiz = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <>
        <div className='app'>
                  {
                    loading?
                    <FadeLoader
                    speedMultiplier={2}
                    color={'#7cc6fe'}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  :
                  <div className='answer-section'>
                        <h5 style={{textAlign:'center'}}><MdOutlineMenuBook/> Menu Quiz <MdOutlineMenuBook/></h5>
                        <Link className="link" to="/Quiz" > <TbMoodBoy/> Kids Quiz</Link>
                        <Link className="link" to="/HistoricalQuiz" ><MdHistoryEdu/> Historical Quiz</Link>
                        <Link className="link" to="/FootballQuiz" ><IoMdFootball/> Football Quiz</Link>
                        <Link className="link" to="/GeographyQuiz" ><ImEarth/> Geography Quiz</Link>
                  </div>
          }
        </div>
    </>
  )
}

export default MenuOfQuiz