import React,{useState} from 'react';
import Display from './components/display';
import Input from './components/input';
import List from './components/list';
import './styles/app.scss';

function App() {

  const[income,setIncome]=useState(0);
  const[expense,setExpense]=useState(0);
  const[total,setTotal]=useState(0);
  const[inc,setInc]=useState([]);
  const[exp,setExp]=useState([]);

  return (
    <div className="App">
      
      <h1>Budgety</h1>
    
      <Display income={income} setIncome={setIncome} expense={expense} setExpense={setExpense} total={total} setTotal={setTotal} inc={inc} exp={exp}/>
      <Input inc={inc} setInc={setInc} exp={exp} setExp={setExp}/>
      <List/>

    </div>
  );
}

export default App;
