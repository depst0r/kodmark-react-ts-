import React from 'react';

type TodoListProps = {
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    const classes = ['todo']
    return (
    <ul>
        {todos.map(todo => {
            return (
                <li key={todo.data.id}>
                <img src={todo.url} alt=""/>
                <span>Hello</span>
            </li>
            )
        })}
    </ul>
    )
}