import React, { useState } from 'react'

const Toggle = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
    <br></br>
      <button 
            onClick={() => setToggle(!toggle)}> Toggle Button
      </button>
      {toggle && 
      (
        <p><b>Toggle button activated!</b></p>
      )}
    </>
  )
}
export default Toggle