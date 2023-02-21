import React, { useState } from 'react'
import "./quiz.css"
import {Link} from "react-router-dom";
import { MdOutlineMenuBook,MdHistoryEdu } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';
import { ImEarth } from 'react-icons/im';
import { TbMoodBoy } from 'react-icons/tb';
const MenuOfQuiz = () => {
  return (
    <>
        <div className='app'>
                <>
                    <div className='answer-section'>
                        <h5 style={{textAlign:'center'}}><MdOutlineMenuBook/> Menu Quiz <MdOutlineMenuBook/></h5>
                        <Link className="link" to="/Quiz" > <TbMoodBoy/> Kids Quiz</Link>
                        <Link className="link" to="/HistoricalQuiz" ><MdHistoryEdu/> Historical Quiz</Link>
                        <Link className="link" to="/FootballQuiz" ><IoMdFootball/> Football Quiz</Link>
                        <Link className="link" to="/GeographyQuiz" ><ImEarth/> Geography Quiz</Link>
                    </div>
                </>
        </div>
    </>
  )
}

export default MenuOfQuiz