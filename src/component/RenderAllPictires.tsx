import React, { useState } from 'react'
import { TodoForm } from '../component/TodoForm'
import { TodoList } from '../component/TodoList'
import { ITodo } from '../interfaces'
import { GroupePictures } from './Grouped/GroupePictures'


const RenderAllPictures: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (url: string, tag: string) => {
    const newTodo: ITodo = {
      image_original_url: url,
      id: Date.now(),
      tag: tag
    }
    
    setTodos(prev => [newTodo, ...prev])
    console.log(todos);
  }


  return (
    <>
      <div className="wrapper">
        <GroupePictures todos={todos}/>
        <TodoForm onAdd={addHandler} todos={todos} />
        <TodoList todos={todos} />
      </div>
    </>
    )
}
export default RenderAllPictures;