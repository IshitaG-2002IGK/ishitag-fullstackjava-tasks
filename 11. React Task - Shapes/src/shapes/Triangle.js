import React from 'react'

export default function triangle(props) 
{
  return (
    <div>
      {/* <p> Area of a Triangle is: {props.base * props.height * 0.5}</p> */}
      <p><b>Perimeter of a Triangle is: {props.a + props.b + props.c}</b> </p>
    </div>
  )
}
