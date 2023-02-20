import React from 'react'

export default function Circle(props) 
{
  return (
    <div>
      <p><b> Circumference of Circle is: {props.value * 3.14 * 2} </b></p>
    </div>
  )
}
