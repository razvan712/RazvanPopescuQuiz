import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Button } from '@mui/material';





import './App.css';
import Navbar from './components/Navbar/Navbar';
import Greeter from './components/Greeter/Greeter';
import Question from './components/Question/Question';


function App() {
  const [started, setStarted] = useState(false)
 const [score, setScore] = useState(0)
 const [question, setQuestion] = useState(0)
 const [count, setCount] = useState(0)
 const [random, setRandom] = useState(0)
 

  return (<>
   <Navbar started={started} setStarted={setStarted} count={count} setCount={setCount} setRandom={setRandom} />
   {
  started && count <= 8 ? (
    <Question random={random} count={count} setCount={setCount} setRandom={setRandom} setScore={setScore} score={score} />
  ) :  (
    <Greeter isStarted={started} />
  )
}

  </>
    
  );
}

export default App;
