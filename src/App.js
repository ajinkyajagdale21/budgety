import React from 'react';
import Display from './components/display';
import Input from './components/input';
import List from './components/list';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      
      <h1>Budgety</h1>
    
      <Display/>
      <Input/>
      <List/>

    </div>
  );
}

export default App;
