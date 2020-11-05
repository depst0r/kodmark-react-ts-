import React from 'react';
import { ITodo } from '../interfaces';

interface TodoListprops {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListprops> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li className="todo" key={todo.id}>
                    <label>
                        <div className="todoItemList">
                            <img src={todo.image_original_url} alt="gif"/>
                        </div>
                    </label>
                </li>
                )
            })}
        </ul>
    )
}