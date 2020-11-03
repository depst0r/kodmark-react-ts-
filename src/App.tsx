import React, { useState } from 'react';
import { EntryFiled } from './Components/input/input';
import { List } from './Components/list/list';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<any>([])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      completed: true
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <div className="wrapper">
      <EntryFiled onAdd={addHandler} />
      <List todos={todos} />
    </div>)
}
export default App;