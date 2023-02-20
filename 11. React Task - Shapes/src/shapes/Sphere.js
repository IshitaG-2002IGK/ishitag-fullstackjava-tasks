import React from 'react'

export default function sphere(props) 
{
  return (
    <div>
      <p> <b>Volume of a Sphere is: {props.value * props.value * props.value *3.14*1.33} </b></p>
    </div>
  )
}
