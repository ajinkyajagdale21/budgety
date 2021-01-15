import React from 'react';

function Input(){
 
    return(
            <div>
                <select>
                <option>+</option>
                <option>-</option>
                </select>   
                <input placeholder="add description" type="text"></input>
                <input placeholder="Value" type="number"></input>
                <button>submit</button>

            </div>
    )

}

export default Input;