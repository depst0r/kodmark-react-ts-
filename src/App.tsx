import React, { useState } from 'react';
import { EntryFiled } from './Components/input/input';
import './App.css';

const App: React.FC = () => {
const [todos, setTodos] = useState([])

  const addHandler = (title:string) => {
    console.log('APP-PROPS',title)
  }

  return (
    <div className="wrapper">
     <EntryFiled onAdd={addHandler}/>
    </div>)
}
export default App;