import React from 'react'

export default function Cube(props) 
{
  return (
    <div>
      <p><b>Surface Area of a Cube is: {props.value * props.value* 6}</b> </p>
    </div>
  )
}
