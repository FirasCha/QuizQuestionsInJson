import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FootballQuiz from './component/FootballQuiz';
import HistoricalQuiz from './component/HistoricalQuiz';
import MenuOfQuiz from './component/MenuOfQuiz';
import Quiz from './component/Quiz';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<MenuOfQuiz/>}></Route>
        <Route path='/Quiz' element={<Quiz/>}></Route>
        <Route path='/HistoricalQuiz' element={<HistoricalQuiz/>}></Route>
        <Route path='/FootballQuiz' element={<FootballQuiz/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>  
  );
}

export default App;
