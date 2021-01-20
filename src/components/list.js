import React from 'react';

function List({inc,setInc,exp,setExp})
{
    
    const IncdeleteHandler = (income) => {
        setInc(inc.filter(el => el.id !== income.id))
    }
    const ExpdeleteHandler = (expense) => {
        setExp(exp.filter(el => el.id !== expense.id))
    }
    
    return(
        <div>
              <h2>income</h2>
            {
                 inc.map( income => (
                    
                    <div>
                        <div >
                        {income.description}
                        </div>
           
                        <div >
                        {income.amt}
                        </div>
           
                        <div >
                         <button onClick = {IncdeleteHandler}  key={income.id}>delete</button>
                        </div>           
                     
                    </div>
          ))}
           
             <h2>expense </h2>
            { 
        
                exp.map( expense => (
            <div>
            
                <div >
                    {expense.description}
                </div>
            
                <div >
                    {expense.amt}
                </div>
            
                <div >
                    <button onClick = {ExpdeleteHandler}  >delete</button> 
                </div>
            </div>
            
            ))}    
        </div>
    )
}

export default List;

