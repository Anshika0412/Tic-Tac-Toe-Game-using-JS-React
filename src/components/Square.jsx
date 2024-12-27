import React from 'react'
import Box from './Box'

function Square(props) {
 
  return (
    <div onClick = {props.onClick} className='square' >
        <h3 style={{ color: props.value === "X" ? "red" : "green" }}>
           {props.value}
        </h3>

    </div>
  )
}

export default Square