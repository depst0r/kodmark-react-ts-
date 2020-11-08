import React from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {

    const groupTag = (event: React.MouseEvent) => {
        console.log(todos);
    }

    return <>
        <button
            onClick={groupTag}
        >
            Group
    </button>
    </>
}