import React, { useState } from 'react'
import './App.css'
import { TodoForm } from './component/TodoForm'
import { TodoList } from './component/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos ] = useState<ITodo[]>([])

  const addHandler = (url:string, id: string) => {
    const newTodo: ITodo = {
      image_original_url:url,
      id: id,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  return (
    <>
    <div className="wrapper">
    <TodoForm onAdd={addHandler} />
    <TodoList todos={todos}/>
    </div>
    </>)
}
export default App;