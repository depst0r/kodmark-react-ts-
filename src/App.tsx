import React, { useState } from 'react'
import './App.css'
import { TodoForm } from './component/TodoForm'
import { TodoList } from './component/TodoList'
import { ITodo } from './interfaces'
import { GroupTags } from './component/GroupTags'
import { GetAll } from './component/Selectors/GetAll'

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
        <GetAll todos={todos}/>
        <GroupTags todos={todos} />
        <TodoForm onAdd={addHandler} todos={todos} />
        <TodoList todos={todos} />
      </div>
    </>)
}
export default App;