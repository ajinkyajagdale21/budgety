import React ,{useEffect} from 'react';

function Display({income,setIncome,expense,setExpense,total,setTotal,inc,exp}){
  
    let inco=0;
   let expe=0;

    inc.forEach(el => {
       
        inco += el.amt;

    });

    exp.forEach(el => {
        expe += el.amt;

    });
    
    useEffect(() => {
        setIncome(inco);
        setExpense(expe);
        setTotal(income - expense);
    })
                                
    return(
            <div>
                <h2>Available budget in jan 2020:</h2>

                <h2>Budget: {total}</h2>    
                <h3>income {income}</h3>
                <h3>expense {expense}</h3>
            </div>
    )

}

export default Display;