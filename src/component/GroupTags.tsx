import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
    const [grouped, setGrouped] = useState<any>({})

    const groupTag = (event: React.MouseEvent) => {
        const arrayGroup = todos.reduce((array: any, arg: any) => {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg)
            return array
        }, {})
        setGrouped(arrayGroup)

        if (change === 'Группировать') {
            console.log(grouped)
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
            console.log(todos)
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