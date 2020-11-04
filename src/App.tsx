import React, { useState } from 'react';
import { EntryFiled } from './Components/input/input';
import './App.css';
import { TodoList } from './Components/list/todoList';

const App: React.FC = () => {
const [todos, setTodos] = useState([])

  const addHandler = (title:string) => {
    const newTodo = {
      title: title
    }
    setTodos([ ...todos])
  }


  return (
    <div className="wrapper">
     <EntryFiled onAdd={addHandler}/>

     <TodoList todos={todos}/>
    </div>)
}
export default App;