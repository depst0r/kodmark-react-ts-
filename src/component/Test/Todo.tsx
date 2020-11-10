import React, { useState } from 'react'
import { ITodo } from '../../interfaces';
import { RenderList } from './RenderList'
import { getGrouped } from './Selectors'

interface TodoListprops {
    todos: ITodo[]
}


export const Todo: React.FC<TodoListprops> = ({ todos }) => {
    const [isGroupped, setIsGroupped] = useState(false)

    const clickTest = (event: MouseEvent) => {
        console.log(todos);
    }


    return (
        <div>
            <input type="button" value="Click" />
            {isGroupped && todos.map(res => {
                getGrouped(todos)
                return (
                    <div>
                        <h2>{res.tag}</h2>
                        <RenderList todos={todos} />
                    </div>
                )
            })}
            {!isGroupped && <RenderList todos={todos} />}
        </div>
    )

}