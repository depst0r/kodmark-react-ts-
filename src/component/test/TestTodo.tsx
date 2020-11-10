import React, { MouseEvent, useState } from 'react'
import { ITodo } from '../../interfaces'

interface TodoListprops {
    todos: ITodo[]
}

export const TestTodo:React.FC<TodoListprops> = ({todos}) => {
    const [isGroupped, setIsGroupped] = useState<Boolean>(false)

const checkedInp = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsGroupped(event.target.checked)
    if (isGroupped) {
        return console.log('hello')
    }
}

    return (
        <>
        <input type="button" checked={checkedInp}/>
       {isGroupped && todos.map(res => {
           return (
               <div>
            <h1>{new Set(res.tag)}</h1>
            <img src={res.image_original_url} alt={res.tag}/>
            </div>
           )
       })}
       </>
    )
}