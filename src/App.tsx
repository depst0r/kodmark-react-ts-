import React, { useState } from 'react'
import './App.css'
import { TodoForm } from './component/TodoForm'
// import { TodoList } from './component/TodoList'
import { ITodo } from './interfaces'
import { Todo } from './component/Test/Todo'





const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (url: string, tag: string) => {
    const newTodo: ITodo = {
      image_original_url: url,
      id: Date.now(),
      tag: tag

    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
    console.log(todos);
  }

  return (
    <>
      <div className="wrapper">
        <TodoForm onAdd={addHandler} todos={todos} />
        <Todo todos={todos} />
      </div>
    </>)
}
export default App;