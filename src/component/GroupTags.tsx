import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')




    const groupTag = (event: React.MouseEvent) => {
        console.log(todos)

        if (change === 'Группировать') {
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
        }
    }

    return <>
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}