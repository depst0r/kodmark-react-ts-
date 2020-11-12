import React from 'react';
import { ITodo } from '../interfaces';
import './style/style.css'

interface TodoListprops {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListprops> = ({ todos }) => {

    return (
        <div>
            {todos.map(todo => {
                return (
                    <section className="todo" key={todo.id}>
                        <div className="todoItemList">
                            <img className='img' src={todo.image_original_url} alt={todo.tag} />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}