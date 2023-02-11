import React from 'react'
import {data} from '../../constants'
import './Question.css'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const Question = (props) => {
 
  const [value, setValue] = React.useState('');


  let identifier = props.random;
  let intelectual=Object.entries(data)[props.count][1]
  let question = Object.entries(intelectual)[identifier][1]
  let answers=Object.entries(question.answers)
  console.log(intelectual)
  console.log(question)
  console.log(answers)


  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === 'corect') {
       props.setCount(prev => prev + 1)
       props.setScore(prev => prev + 1)
       console.log(props.count)
      }
      else {
        props.setCount(prev => prev + 1)
      }

}

if (props.count < 8) {
  return (
    

    <div className='App'>
        <img className='avatar' src={intelectual.pic} />
        <div className='question-container'>
        
        <form onSubmit={handleSubmit}>
<FormControl>
  
  <FormLabel id="demo-radio-buttons-group-label" sx={{
    color: 'white', marginTop: '40px'
  }}>{question.body}</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue=""
    name="radio-buttons-group"
    sx={{background: 'gray',
    borderRadius: '10px',
  padding: '10px',}}
  onChange={handleRadioChange}
  >
    {answers.map((answer, index) => {
           return <FormControlLabel className='answer' key={index} value={answer[0]} defaultValue='' control={<Radio />} label={answer[1]} />
        }
        )}
   
  </RadioGroup>
  <Button sx={{ mt: 1, mr: 1, background:'gray' }} type="submit" variant="contained">
          Answer
        </Button>
</FormControl>
</form>
       
     </div>
       
    </div>
  )
}
else {
  return (
    <div className='App' style={{display: 'flex'}}>
      <h1 style={{color: 'white'}}>Congratulations!!!</h1>
      
      <h1 style={{color: 'white'}}> Your score is {props.score} points</h1>
      </div>
  )
}
}


export default Question
