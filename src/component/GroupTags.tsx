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
            const arrayy = todos.reduce((array: any, arg: any) => {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg)
                return array
            }, {})
            console.log(arrayy)
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
            return todos
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