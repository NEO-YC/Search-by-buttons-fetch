import React from 'react'

function Calc() {

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [op, setOp] = React.useState("+");
    const [result, setResult] = React.useState(0);



    

  function calc() {setResult(eval(`${num1}${op}${num2}`));} 
  




  return (
<div style={{textAlign: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold",}}>

    <input type="number" onChange={(e)=>setNum1(e.target.value)}/>

    <select name="" id="" onChange={(e)=>setOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="number" onChange={(e)=>setNum2(e.target.value)} />

    <button onClick={calc}>=</button>

    <div style={{marginTop: "20px", fontSize: "25px",}}>{result}</div>
</div>


    
  )
}

export default Calc