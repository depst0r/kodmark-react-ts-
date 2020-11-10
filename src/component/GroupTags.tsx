import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
    grouped: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos, grouped }) => {
    const [change, setChange] = useState<string>('Группировать')
    const [checked, setChecked] = useState<Boolean>(false)




    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
            const arrayGroup = todos.reduce((array: any, arg: any) => {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg)
                return array
            }, {})
            if (grouped === undefined) {
                console.log('error')
            } else {
                // console.log(Object.values(grouped))
                console.log(grouped)
            }
            console.log(arrayGroup);

            setChange('Разгруппировать')
            setChecked(true)
            console.log(checked)

        } else {
            setChange('Группировать')
            setChecked(false)
            console.log(checked)
            console.log(todos);
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