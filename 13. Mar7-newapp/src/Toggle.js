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
      
      {/* Method 1: */}
      {toggle && 
      (
        <p><b>Toggle button activated!</b></p>
      )}

      {/* Method 2: */}

      {/* {
        toggle? <p><b>Toggle button activated!</b></p>: null
      } */}
    </>
  )
}
export default Toggle