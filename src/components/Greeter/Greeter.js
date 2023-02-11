import React from 'react'
import './Greeter.css'
import { Grid, Item } from '@mui/material'
import {images}  from '../../constants'


const Greeter = () => {
   
  return (
   <>
     <div className="App" >
   <Grid container spacing={2} className='grid' maxWidth='md' >
  {Object.entries(images).map(([key, value]) => {
    return <Grid item className='griditem' key={value} xs={4} md={3} lg={3} ><img src={value} alt={key}  /></Grid>
  })}
</Grid>
</div>
</>
  )
}

export default Greeter
