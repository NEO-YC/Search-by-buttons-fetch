import React, { useState } from 'react'

function Touporlower() {

    const[str,setstr]=useState("");


function uper() {setstr(str.toUpperCase())}
function lower() {setstr(str.toLowerCase())}



  return (
    <div style={{textAlign: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold",}} >

        <input onChange={(e)=>setstr(e.target.value)} type="text" /> 
        <button onClick={uper}>To Uppercase</button>
        <button onClick={lower}>To LowerCase</button>
        <p>{str}</p>

    </div>
  )
}

export default Touporlower