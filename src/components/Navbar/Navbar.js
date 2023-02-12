import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import './Navbar.css';
import {data} from '../../constants'


const Navbar = ({started, setStarted, count, setCount, setRandom, setScore}) => {



  const startGame = () => {
    setStarted(true);
    setCount(0)
    setScore(0)
    

    setRandom(Math.floor(Math.random() * 4) + 1)
    console.log(started)
  }

  return (
    <AppBar position="static" color='secondary' className='appbar'>
    <Toolbar className='test'>
      <Button onClick={startGame} variant='contained' color="primary" className='button' >Start Game</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
