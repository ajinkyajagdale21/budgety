import React, { useState } from 'react';

function Input({inc,setInc,exp,setExp}){

  const [opt,setOpt]=useState('inc');
  const [desc,setDesc]=useState("");
  const [amt,setAmt]=useState("");
  const [isInc , setIsInc] = useState(true);

const optionChangeHandler=(e)=>{
   setOpt(e.target.value);
   setIsInc(!isInc);
}
const descChangeHandler=(e)=>{
    setDesc(e.target.value);
}
const amtChangeHandler=(e)=>{
    setAmt(e.target.value);
}
const submitClickHandler=()=>{
    if(amt!=='' && desc!=='')
    {
        if(opt==='inc'){
            setInc([...inc,{description:desc ,amt:parseFloat(amt)}]);
          }
        if(opt==='exp'){
            setExp([...exp,{description:desc ,amt:parseFloat(amt)}]);
        }  
    }
    setDesc("");
    setAmt("");
}


    return(
            <div>
                <select onChange={optionChangeHandler} >
                        <option value="inc">+</option>
                        <option value="exp">-</option> 
                </select>   
                <input onChange={descChangeHandler} value={desc} placeholder="add description" type="text"></input>
                <input onChange={amtChangeHandler} value={amt} placeholder="Amount" type="number"></input>
                <button onClick={submitClickHandler}>submit</button>

            </div>
    )

}

export default Input;