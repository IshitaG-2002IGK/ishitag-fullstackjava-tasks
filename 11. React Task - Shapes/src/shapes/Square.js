import React from "react";

export default function Square(props) 
{
  return (
    <div>
      <p><b>Area of Square is: {props.value * props.value}</b></p>
    </div>
  );
}
