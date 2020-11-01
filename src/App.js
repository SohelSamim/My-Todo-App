import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App"> 
    <h1> Todo App </h1>
    <input 
    value= {input} 
    onChange= {(e) => setInput(e.target.value)} 
    type="text" 
    />
    <button> Add todo</button>
    <Todo title ="Take dogs out 1"/>
    <Todo title ="Take dogs out 2"/>
    <Todo title ="Take dogs out 3"/>
    <Todo title ="Take dogs out 4"/>
    <Todo title ="Take dogs out 5"/>
    <Todo title ="Take dogs out 6"/>

    </div>
  );
}

export default App;
