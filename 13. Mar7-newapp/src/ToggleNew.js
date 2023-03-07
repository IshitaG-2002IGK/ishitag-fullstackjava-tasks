import React, { useState, useEffect } from 'react'

function ToggleNew() {
    const [count ,setCount]=useState(0)
    const [toogle ,setToogle]=useState(false)
  
    useEffect(()=>{
      console.log("hi");
     if(toogle === true){
      window.alert("Toggle activated");
      setToogle(false);
     }
    },[toogle]);
  
    return (
  
       <>
       <button onClick={()=>{setToogle(true)} }>Toogle</button>
       </>
    );
  }
  
  export default ToggleNew;